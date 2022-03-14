import styled from 'styled-components'

export const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  width: 100vw;
  margin-top: 50vh;
  margin-bottom: 10vh;
  
  @media (max-width:420px){
    position:absolute;
    bottom:30px;
  }

  @media (max-width:380px){
    position:absolute;
    bottom:10px;
    
  }
  
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
  position:absolute;
  width: 250px;
  max-width: 300px;
  bottom:280px;
  /* margin-right: 800px; */
  margin-left: 73vh;
  margin-bottom: 3vh;
  border-radius: 20px;
   
  /* @media (max-width:420px){
    margin-left: 108vh;

  } */
  @media (max-width:420px){
    position:absolute;
    width:250px;
    margin-left:70px;
    bottom:360px;

  }
  @media (max-width:380px){
    position:absolute;
    width:200px;
    bottom:320px;
    margin-left:75px;
    

  }
  
  
  

  `

  export const h3 = styled.h3 `
  
  margin-right: 100px;
  
  `