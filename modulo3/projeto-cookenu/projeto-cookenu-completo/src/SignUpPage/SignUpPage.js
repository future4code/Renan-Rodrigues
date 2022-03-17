import React from "react"
import logo from "../assets/logo.jpg"
import {ScreenContainer} from "./styled"
import SignUpForm from "./SignUpForm"
import { LogoImage } from "./styled"
import useUnProtectedPage from "../hooks/useUnProtectedPage"


const SignUpPage = ({setRightButtonText}) =>{
    useUnProtectedPage()

    return (
        <ScreenContainer>
            <LogoImage src={logo}/>
            <SignUpForm setRightButtonText ={setRightButtonText} />
        </ScreenContainer>

    )


}

export default SignUpPage;