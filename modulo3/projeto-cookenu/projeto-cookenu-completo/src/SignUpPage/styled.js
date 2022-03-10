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
  width: 60vw;
  max-width: 350px;
  margin-bottom: 3vh;
  border-radius: 20px;
  margin-right: 50px

  @media (max-width: 420px) {
    /* position:absolute; */
    /* width:60vw; */
    /* margin-left:50px; */
    /* margin-right:150px; */
    padding-right:28px;
    
  }

`
