import React from "react"
import { useHistory } from "react-router-dom"

export const TripDetailsPage = () =>{

    const history = useHistory ()
    
const voltarParaPainelAdm = () =>{
history.push ("/admin/trips/list")
        
}



    return (

        <div>
        
        <p> TripDetailsPage </p>
        <button  onClick ={voltarParaPainelAdm}> Voltar </button>

        </div>

    )


}