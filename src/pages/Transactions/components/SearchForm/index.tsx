import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { SearchFormContainer } from './styles'
import * as z from 'zod'
import { useContext } from 'react'
import { TransactionsContext } from '../../../../contexts/TransactionsContext'

const searchFormSchema = z.object({
	query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
	const { fetchTransactions } = useContext(TransactionsContext)
	
	const {
		register,
		formState: { isSubmitting },
		handleSubmit,
	} = useForm<SearchFormInputs>({
		resolver: zodResolver(searchFormSchema),
	})

	async function handleSearchTransactions(data: SearchFormInputs) {
		await fetchTransactions(data.query)
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
