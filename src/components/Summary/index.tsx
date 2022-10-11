import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { SummaryContainer, SummaryCard } from "./styles";

export function Summary() {
  return(
   <SummaryContainer>
    <SummaryCard>
      <header>
        <span>Income</span>
        <ArrowCircleUp size={32} color="#00B37E" />
      </header>
      <strong>CAD$ 17,400.00</strong>
    </SummaryCard>
    <SummaryCard>
      <header>
        <span>Expense</span>
        <ArrowCircleDown size={32} color="#F75A68" />
      </header>
      <strong>CAD$ 17,400.00</strong>
    </SummaryCard>
    <SummaryCard variant="green">
      <header>
        <span>Total</span>
        <CurrencyDollar size={32} color="#FFF" />
      </header>
      <strong>CAD$ 17,400.00</strong>
    </SummaryCard>
   </SummaryContainer>
  )
} 