import styled from 'styled-components'

export const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  margin-top: 5vh;
`

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 450px;
  align-items: center;
  margin-bottom: 20px;
`

export const SignUpFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 450px;
  align-items: center;
  margin-bottom: 20px;
`

export const LogoImage = styled.img`
  width: 70vw;
  max-width: 350px;
  margin-bottom: 3vh;
  border-radius: 20px;
  
  @media (max-width: 420px){
    width:60vw;
    margin-right:25px;
  }

  @media (max-width: 380px){
    width:60vw;
    margin-right:25px;
  }
`
