import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";

import logoImg from '../../assets/logo.svg'

export function Header() {
  return(
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="DT Money" />
        <NewTransactionButton>New transaction</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  )
}