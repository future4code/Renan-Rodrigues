import React from "react"
import { useHistory } from "react-router-dom"

export const ApplicationFormPage = () =>{

const history = useHistory ()

const irParaVerViagens = () =>{
history.push ("/trips/list")
    
}
    
const enviar = () =>{
history.push ("/trips/application")
    
}



    return (

        <div>
        
        <p> ApplicationFormPage </p>

        <button onClick ={irParaVerViagens}> Voltar </button>
        <button onClick ={enviar}> Enviar </button>


        </div>

    )


}