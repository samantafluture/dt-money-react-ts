import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { SearchForm } from './components/SearchForm'
import {
	PriceHighlight,
	TransactionsContainer,
	TransactionsTable,
} from './styles'

export function Transactions() {
	return (
		<div>
			<Header />
			<Summary />

			<TransactionsContainer>
        <SearchForm />
				<TransactionsTable>
					<tbody>
						<tr>
							<td width='50%'>Site development</td>
							<td>
								<PriceHighlight variant='income'>
									CAD$ 3,000.000
								</PriceHighlight>
							</td>
							<td>Sell</td>
							<td>04/05/2022</td>
						</tr>
						<tr>
							<td width='50%'>Rent</td>
							<td>
								<PriceHighlight variant='expense'>
									- CAD$ 1,023.000
								</PriceHighlight>
							</td>
							<td>Housing</td>
							<td>04/01/2022</td>
						</tr>
					</tbody>
				</TransactionsTable>
			</TransactionsContainer>
		</div>
	)
}
