
import React from "react"
import { useHistory } from "react-router-dom"
import tema from "../componentes/tema.jpg"

export const HomePage = () =>{
    
    

    const history = useHistory ()

    const irParaVerViagens = () =>{
        history.push ("/trips/list")

    }

    const irParaAreaAdmin = () =>{
        history.push ("/login")

    }

    return (
        
        <div>
             { <img className="tema" src={tema}   />}

            <div className = "Card-home">

            <h1 className = "home"> Home Page</h1>
        <button className ="CardBotao-home" onClick ={irParaVerViagens}> Ver Viagens</button>
        <button className ="CardBotao-home" onClick ={irParaAreaAdmin}> Área de Admin </button>
        
        
        </div>

        </div>

    )


}