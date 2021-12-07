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


    return (

        
       <div>
        <Header>

        <button onClick ={irParaHome}> Home </button>
      
        </Header>

        </div>
    )


}