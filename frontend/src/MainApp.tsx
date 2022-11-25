import React from 'react'
import { ClipboardButton, Icon, Result, ResultContainer } from './Styles/Result'
import { Container, Title } from './Styles/Styles'

type Props = {}

const MainApp = (props: Props) => {
  return (
    <Container>
        <Title>Mini Password Generator Manager</Title>
        <ResultContainer>
            <Result></Result>
            <ClipboardButton>
                <Icon className='far fa-clipboard'></Icon>
            </ClipboardButton>
        </ResultContainer>
    </Container>
  )
}

export default MainApp