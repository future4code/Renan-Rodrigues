import React from "react"
import {useState} from "react"
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { InputsContainer } from './styled'
import { SignUpFormContainer } from "./styled"
import { useHistory } from 'react-router-dom'
import useForm from '../hooks/useForm'
import {signUp} from "../services/user"
import CircularProgress from '@material-ui/core/CircularProgress'

const SignUpForm = ({setRightButtonText}) =>{
    const history = useHistory ()

    const [form, onChange, clear] = useForm ({name:"", email:"", password:""})
    const [isLoading, setIsLoading] = useState(false)
    
    const onSubmitForm = (event) => {
        event.preventDefault()
        signUp(form, clear, history, setRightButtonText, setIsLoading)
      }
    


    return (
        <form onSubmit={onSubmitForm}>
            <SignUpFormContainer  >
            <InputsContainer>
            <TextField
                        name={'name'}
                        value={form.name}
                        onChange={onChange}
                        label={"Nome"}
                        variant={"filled"}
                        fullWidth
                        margin={"normal"}
                        required
                        autoFocus
                       
                    />
                 <TextField
                        name={'email'}
                        value={form.email}
                        onChange={onChange}
                        label={"E-mail"}
                        variant={"filled"}
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
                        variant={"filled"}
                        fullWidth
                        margin={"normal"}
                        required
                        type={"password"}
                    />  
                    </InputsContainer>       
                    <Button
                    type={"submit"}
                    fullWidth
                    variant={"contained"}
                    color={"primary"}
                    margin ={"normal"}
                >
                    {isLoading ? <CircularProgress color={"inherit"} size={24}/> : <>Fazer Cadastro</>}
                     </Button>
                   
                    </SignUpFormContainer>
                 </form>
                
        
    )


}

export default SignUpForm;