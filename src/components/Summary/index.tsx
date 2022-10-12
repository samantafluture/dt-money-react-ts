import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { useSummary } from '../../hooks/useSummary'
import { priceFormatter } from '../../utils/formatter'
import { SummaryContainer, SummaryCard } from './styles'

export function Summary() {
	const summary = useSummary()
  
  return (
		<SummaryContainer>
			<SummaryCard>
				<header>
					<span>Income</span>
					<ArrowCircleUp size={32} color='#00B37E' />
				</header>
				<strong>{priceFormatter.format(summary.income)}</strong>
			</SummaryCard>
			<SummaryCard>
				<header>
					<span>Expense</span>
					<ArrowCircleDown size={32} color='#F75A68' />
				</header>
				<strong>{priceFormatter.format(summary.expense)}</strong>
			</SummaryCard>
			<SummaryCard variant='green'>
				<header>
					<span>Total</span>
					<CurrencyDollar size={32} color='#FFF' />
				</header>
				<strong>{priceFormatter.format(summary.total)}</strong>
			</SummaryCard>
		</SummaryContainer>
	)
}
