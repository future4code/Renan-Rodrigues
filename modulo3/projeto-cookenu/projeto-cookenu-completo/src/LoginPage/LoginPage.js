import React from "react"
import {InputsContainer, ScreenContainer } from "./styled"
import logo from "../assets/logo.jpg"
import { LogoImage } from "./styled"
import TextField from '@material-ui/core/TextField'
import useForm from "../hooks/useForm"
import Button from '@material-ui/core/Button'




const LoginPage = () =>{

    const [form, onChange, clear] = useForm ({email:"", password:""})
    
    const onSubmitForm = (event) =>{
        // event.preventDefault()

    }


    return (
        
        <ScreenContainer>
            <LogoImage src={logo} />
            <InputsContainer >
            <form onSubmit={onSubmitForm}>
                 <TextField
                        name={'email'}
                        value={form.email}
                        onChange={onChange}
                        label={"E-mail"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                        type={"email"}
                    />
                    <TextField
                        name={'password'}
                        value={form.password}
                        onChange={onChange}
                        label={"Senha"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                        type={"password"}
                    />         
                    </form>

                    <Button
                    type={"submit"}
                    fullWidth
                    variant={"contained"}
                    color={"primary"}
                    margin ={"normal"}
                >
                    Fazer Login!
                </Button>

            </InputsContainer>

            


            </ScreenContainer>

        

    )


}

export default LoginPage;