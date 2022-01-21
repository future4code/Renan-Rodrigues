import axios from "axios"
import {goToRecipesList} from "../routes/coordinator"


 export const login = (body, clear, history, setRigthButtonText,setIsLoading) => {
    setIsLoading(true)
    axios.post ("https://cookenu-api.herokuapp.com/user/login",body)
    .then((res)=> {
        localStorage.setItem ("token", res.data.token)
        clear()
        setIsLoading(false)
        goToRecipesList (history)
        setRigthButtonText ("Logout")
    })

    .catch((err) => {
        setIsLoading(false)
        alert(err.response.data.message)
    })

}

export const signUp = (body, clear, history, setRigthButtonText,setIsLoading) => {
    setIsLoading(true)
    axios.post("https://cookenu-api.herokuapp.com/user/signup", body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            setIsLoading(true)
            goToRecipesList (history)
            setRigthButtonText ("Logout")
            
        })
        .catch((err) => {
            setIsLoading(false)
            alert(err.response.data.message)
        })
           
}