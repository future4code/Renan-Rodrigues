import React from "react"
import { useHistory } from "react-router-dom"


export const AdminHomePage = () =>{

    const history = useHistory ()

    const irParaCriarViagem = () =>{
        history.push ("/admin/trips/create")

    }
    const voltarParaLogin = () =>{
        history.push ("/login")

    }

    const voltarParaHome = () =>{
        history.push ("/")

    }
    return (

        <div>
        
        <p> AdminHomePage </p>
        <button className ="CardBotao-Viagens" onClick ={voltarParaLogin}> Voltar </button>
        <button className ="CardBotao-Viagens" onClick ={irParaCriarViagem}> Criar Viagem</button>
        <button className ="CardBotao-Viagens" onClick ={voltarParaHome}> Logout </button>

        </div>

    )


}