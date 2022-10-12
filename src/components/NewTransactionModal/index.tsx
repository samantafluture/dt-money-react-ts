import * as Dialog from '@radix-ui/react-dialog'
import * as z from 'zod'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import {
	Content,
	Overlay,
	CloseButton,
	TransactionType,
	TransactionTypeButton,
} from './styles'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { useContextSelector } from 'use-context-selector'

const newTransactionFormSchema = z.object({
	description: z.string(),
	price: z.number(),
	category: z.string(),
	type: z.enum(['income', 'expense']),
})

type newTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

export function NewTransactionModal() {
	const createTransaction = useContextSelector(
		TransactionsContext,
		(context) => {
			return context.createTransaction
		}
	)

	const {
		control,
		register,
		handleSubmit,
		formState: { isSubmitting },
		reset,
	} = useForm<newTransactionFormInputs>({
		resolver: zodResolver(newTransactionFormSchema),
		defaultValues: { type: 'income' },
	})

	async function handleCreateNewTransaction(data: newTransactionFormInputs) {
		const { description, price, category, type } = data

		await createTransaction({
			description,
			price,
			category,
			type,
		})
		reset()
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

					<Controller
						control={control}
						name='type'
						render={({ field }) => {
							return (
								<TransactionType
									onValueChange={field.onChange}
									value={field.value}
								>
									<TransactionTypeButton
										variant='income'
										value='income'
									>
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
							)
						}}
					/>

					<button type='submit' disabled={isSubmitting}>
						Create
					</button>
				</form>
			</Content>
		</Dialog.Portal>
	)
}
