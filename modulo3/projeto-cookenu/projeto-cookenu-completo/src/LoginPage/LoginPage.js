import React from "react"
import { ScreenContainer,SignUpButtonContainer } from "./styled"
import logo from "../assets/logo.jpg"
import { LogoImage } from "./styled"
import Button from '@material-ui/core/Button'
import LoginForm from "./LoginForm"
import { useHistory } from "react-router-dom"
import {goToSignUp} from "../routes/coordinator"
import useUnProtectedPage from "../hooks/useUnProtectedPage"




const LoginPage = ({setRigthButtonText}) =>{
    useUnProtectedPage()
    const history = useHistory ()
    
    return (
        
        <ScreenContainer>
            <LogoImage src={logo} />
            <LoginForm setRigthButtonText ={setRigthButtonText}/>
                    
            <SignUpButtonContainer>
                <Button 
                    onClick={() => goToSignUp(history)}   
                    type={"submit"}
                    fullWidth
                    variant={"text"}
                    color={"primary"}
                    margin ={"normal"}
                    >
                        Não possui conta? Cadastre-se!
                </Button> 
            </SignUpButtonContainer>


            </ScreenContainer>

        

    )


}

export default LoginPage;