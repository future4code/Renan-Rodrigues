import React from "react"
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom"
import tema2 from "../componentes/tema2.jpg"

export const LoginPage = () =>{

    const history = useHistory ()

    const irParaPainelAdm = () =>{
        history.push ("/admin/trips/list")

    }


    const [email, setEmail] = useState("");
    const [password, setPassowrd] = useState("");
  
    

    const onChangeEmail = (event) => {
      setEmail(event.target.value);
    };
  
    const onChangePassword = (event) => {
        setPassowrd(event.target.value);
      };

      const efetuarLogin =() =>{
        console.log (email, password)

        const body = {
            email: email,
            password: password
        }

        axios.post ("https://us-central1-labenu-apis.cloudfunctions.net/labeX/renan-moreira-carver/login", body)
        .then ((response) =>{
            console.log ("Sucesso:", response.data)


        }).catch ((error)=>{
            console.log ("Falhou:", error.response)

        })

      }
    
    return (

        <div>

        <div>{ <img className="tema2" src={tema2}   />} </div>
        
        <h2 className="texto-login"> CADASTRAR VIAGEM </h2>

      <div className="Card-Login">
        <input
        placeholder = "email"
        type = "email"
        value={email}
        onChange={onChangeEmail}
      />
         <input
        placeholder = "password"
        type = "password"
        value={password}
        onChange={onChangePassword}
      />
        <button onClick = {efetuarLogin, irParaPainelAdm}> Entrar </button>
        </div>

     </div>   

    )


}