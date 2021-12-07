import React from "react"
import { useHistory } from "react-router-dom"

export const ListTripsPage = () =>{

const history = useHistory ()

const irParaHome = () =>{
history.push ("/")

}

const irParaIncreverViagens = () =>{
 history.push ("/trips/application")

}


    return (

        <div>
        
        <p> ListTripsPage </p>

        <button onClick ={irParaHome}> Voltar </button>
        <button onClick ={irParaIncreverViagens}> Inscreva-se </button>

        </div>

    )


}