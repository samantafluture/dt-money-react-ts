import * as Dialog from '@radix-ui/react-dialog'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import {
	Content,
	Overlay,
	CloseButton,
	TransactionType,
	TransactionTypeButton,
} from './styles'

const newTransactionFormSchema = z.object({
	description: z.string(),
	price: z.number(),
	category: z.string(),
	// type: z.enum(['income', 'expense']),
})

type newTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

export function NewTransactionModal() {
	const {
		register,
		handleSubmit,
		formState: { isSubmitting },
	} = useForm<newTransactionFormInputs>({
		resolver: zodResolver(newTransactionFormSchema),
	})

	function handleCreateNewTransaction(data: newTransactionFormInputs) {
		console.log(data)
	}

	return (
		<Dialog.Portal>
			<Overlay />
			<Content>
				<Dialog.Title>New Transaction</Dialog.Title>
				<CloseButton>
					<X />
				</CloseButton>
				<form onSubmit={handleSubmit(handleCreateNewTransaction)}>
					<input
						type='text'
						placeholder='Description'
						required
						{...register('description')}
					/>
					<input
						type='number'
						placeholder='Price'
						required
						{...register('price', { valueAsNumber: true })}
					/>
					<input
						type='text'
						placeholder='Category'
						required
						{...register('category')}
					/>

					<TransactionType>
						<TransactionTypeButton variant='income' value='income'>
							<ArrowCircleUp size={24} />
							Income
						</TransactionTypeButton>
						<TransactionTypeButton
							variant='expense'
							value='expense'
						>
							<ArrowCircleDown size={24} />
							Expense
						</TransactionTypeButton>
					</TransactionType>

					<button type='submit' disabled={isSubmitting}>Create</button>
				</form>
			</Content>
		</Dialog.Portal>
	)
}
