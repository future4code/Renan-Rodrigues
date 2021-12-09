import React from "react"
import styled from 'styled-components';
import GlobalStyle from "../componentes/Style"
import { useHistory } from "react-router-dom"



export const Header = () =>{

    const Header = styled.div `
    background-color: #BAE2C3;
    height: 100px;
    border:solid 2px black;
    
    ` 
 

const history = useHistory ()

const irParaHome = () =>{
history.push ("/")

}
const irParaAreaAdmin = () =>{
    history.push ("/login")

}


    return (

        
       <div>
        <Header>

        <button className ="CardBotao-Header" onClick ={irParaHome}> Home </button>
        <button className ="CardBotao-Header" onClick ={irParaAreaAdmin}> Área de Admin </button>
        
      
        </Header>

        </div>
    )


}