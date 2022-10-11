import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { useContext } from 'react'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { SummaryContainer, SummaryCard } from './styles'

export function Summary() {
	const { transactions } = useContext(TransactionsContext)
  
	const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'income') {
      acc.income += transaction.price
      acc.total += transaction.price
    } else {
      acc.expense += transaction.price
      acc.total -= transaction.price
    }
    
    return acc
  }, {income: 0, expense: 0, total: 0})
  
  return (
		<SummaryContainer>
			<SummaryCard>
				<header>
					<span>Income</span>
					<ArrowCircleUp size={32} color='#00B37E' />
				</header>
				<strong>CAD$ {summary.income}</strong>
			</SummaryCard>
			<SummaryCard>
				<header>
					<span>Expense</span>
					<ArrowCircleDown size={32} color='#F75A68' />
				</header>
				<strong>CAD$ {summary.expense}</strong>
			</SummaryCard>
			<SummaryCard variant='green'>
				<header>
					<span>Total</span>
					<CurrencyDollar size={32} color='#FFF' />
				</header>
				<strong>CAD$ {summary.total}</strong>
			</SummaryCard>
		</SummaryContainer>
	)
}
