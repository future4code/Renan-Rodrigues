import React from "react"
import { useHistory } from "react-router-dom"

export const CreateTripPage = () =>{

const history = useHistory ()

const voltarParaPainelAdm = () =>{
history.push ("/admin/trips/list")

}


const formularioPage = () =>{
history.push ("/admin/trips/create")
    
}


    return (

        <div>
        
        <p> CreateTripPage </p>

        <button  onClick ={voltarParaPainelAdm}> Voltar </button>
        <button  onClick ={formularioPage}> Criar </button>

        </div>

    )


}