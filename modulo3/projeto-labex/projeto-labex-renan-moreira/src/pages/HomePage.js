
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
             { <img className="tema" src={tema}   />}

            <h3 className="texto-apresentacao">Explorar Planetas é muito mais do que viajar.</h3>
            <h3 className="sub-texto-apresentacao">É viver experiências sem limites...  </h3>   
            <div className = "Card-logo">
            <h1 className = "home"> LABEX</h1>
          
        <button className ="CardBotao-Viagens" onClick ={irParaVerViagens}> VER VIAGENS</button>
         </div>





        </div>

    )


}