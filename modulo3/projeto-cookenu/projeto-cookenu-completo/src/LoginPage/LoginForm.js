import React, {useState} from "react"
import {InputsContainer} from "./styled"
import TextField from '@material-ui/core/TextField'
import useForm from "../hooks/useForm"
import Button from '@material-ui/core/Button'
import {login} from "../services/user"
import { useHistory } from "react-router-dom"
import CircularProgress from '@material-ui/core/CircularProgress'


const LoginForm = ({setRightButtonText}) =>{

    const [form, onChange, clear] = useForm ({email:"", password:""})
    const history = useHistory()
    const [isLoading, setIsLoading] = useState(false)

    const onSubmitForm = (event) =>{
        event.preventDefault()
        login(form,clear, history, setRightButtonText,setIsLoading)

    }

   

    return (
        
            <InputsContainer >
            <form onSubmit={onSubmitForm}>
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
                    <Button
                    type={"submit"}
                    fullWidth
                    variant={"contained"}
                    color={"primary"}
                    margin ={"normal"}
                >
                    {isLoading ? <CircularProgress color={"inherit"} size={24}/> : <>Fazer Login</>}
                     </Button>
                    </form>
                    </InputsContainer>
                
        

    )


}

export default LoginForm;