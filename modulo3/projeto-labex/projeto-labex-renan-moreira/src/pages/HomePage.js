
import React from "react"
import { useHistory } from "react-router-dom"
import tema from "../componentes/tema.jpg"

export const HomePage = () =>{
    
    

    const history = useHistory ()

    const irParaVerViagens = () =>{
        history.push ("/trips/list")

    }

    

    return (
        
        <div>
             {/* { <img className="tema" src={tema}   />} */}

            <h3 className="texto-apresentacao">Na Labenu você aprende a programar do zero! Nossa formação Web Full Stack contém. </h3>
            <div className = "Card-logo">
            <h1 className = "home"> LABEX</h1>
            <h3>Sua melhor experiência!</h3>
        <button className ="CardBotao-Viagens" onClick ={irParaVerViagens}> VER VIAGENS</button>
         </div>





        </div>

    )


}