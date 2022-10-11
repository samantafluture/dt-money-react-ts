import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'

import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import {
	Content,
	Overlay,
	CloseButton,
	TransactionType,
	TransactionTypeButton,
} from './styles'

export function NewTransactionModal() {
	return (
		<Dialog.Portal>
			<Overlay />
			<Content>
				<Dialog.Title>New Transaction</Dialog.Title>
				<CloseButton>
					<X />
				</CloseButton>
				<form action=''>
					<input type='text' placeholder='Description' required />
					<input type='number' placeholder='Price' required />
					<input type='text' placeholder='Category' required />

					<TransactionType>
						<TransactionTypeButton variant='income' value='income'>
              <ArrowCircleUp size={24}/>
              Income
            </TransactionTypeButton>
            <TransactionTypeButton variant='expense' value='expense'>
              <ArrowCircleDown size={24}/>
              Expense
            </TransactionTypeButton>
					</TransactionType>

					<button type='submit'>Create</button>
				</form>
			</Content>
		</Dialog.Portal>
	)
}
