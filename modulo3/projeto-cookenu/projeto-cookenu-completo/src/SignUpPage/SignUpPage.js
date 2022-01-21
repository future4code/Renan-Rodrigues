import React from "react"
import logo from "../assets/logo.jpg"
import {ScreenContainer} from "./styled"
import SignUpForm from "./SignUpForm"
import { LogoImage } from "./styled"
import useUnProtectedPage from "../hooks/useUnProtectedPage"


const SignUpPage = ({setRigthButtonText}) =>{
    useUnProtectedPage()

    return (
        <ScreenContainer>
            <LogoImage src={logo}/>
            <SignUpForm setRigthButtonText ={setRigthButtonText} />
        </ScreenContainer>

    )


}

export default SignUpPage;