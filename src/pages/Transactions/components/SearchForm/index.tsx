import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { SearchFormContainer } from './styles'
import * as z from 'zod'

const searchFormSchema = z.object({
	query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
	const {
		register,
		formState: { isSubmitting },
		handleSubmit,
	} = useForm<SearchFormInputs>({
		resolver: zodResolver(searchFormSchema),
	})

	function handleSearchTransactions(data: SearchFormInputs) {
		console.log(data)
	}

	return (
		<SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
			<input
				type='text'
				placeholder='Search for a transaction'
				{...register('query')}
			/>
			<button type='submit' disabled={isSubmitting}>
				<MagnifyingGlass size={20} />
				Search
			</button>
		</SearchFormContainer>
	)
}
