import styled from 'styled-components'

export const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;

  
  align-items: center;
  width: 100vw;
  margin-top: 5vh;
  margi-bottom: 10vh;
  
`

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 450px;
  align-items: center;
  margin-bottom: 20px;
  /* border:solid 1px; */
  
`

export const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 450px;
  align-items: center;
  margin-bottom: 20px;
`

export const SignUpButtonContainer = styled.div`
  width: 80vw;
  max-width: 450px;
 
`

export const LogoImage = styled.img`
  width: 70vw;
  max-width: 300px;
  margin-right: 800px;
  margin-left: 112vh;
  margin-bottom: 3vh;
  border-radius: 20px;
 
  @media (max-width: 420px) {
    /* position:absolute; */
    width:60vw;
    /* margin-left:50px; */
    /* margin-right:150px; */
    padding-left:60px;
    
  }
 
  @media (max-width: 390px) {
    /* position:absolute; */
    width:60vw;
    /* margin-left:50px; */
    /* margin-right:150px; */
    padding-right:125px;
  }

  @media (max-width: 380px) {
    /* position:absolute; */
    width:60vw;
    /* margin-left:50px; */
    padding-left:250px;
  }

  
  `

  export const h3 = styled.h3 `
  
  margin-right: 100px;
  
  `