import React from "react";
import axios from "axios";
import  GlobalStyle  from './Components/styles'
import styled from 'styled-components';
import tema from './Components/img/tema.jpeg'
import CriarPlaylists from "./Components/CriarPlaylists";
import VerPlaylists from "./Components/VerPlaylists";
import InformacoesPlaylists from "./Components/InformacoesPlaylists";


const Header = styled.div`
text-align:center;
background-color:orange;
border-radius:10px;


`


export default class App extends React.Component {

  state ={

    CriarPlaylists: "Criar Playlists",

  }

  escolheTela =() =>{
   switch (this.state.CriarPlaylists) {
    case "Criar Playlists":
      return <CriarPlaylists irParaVerPlaylists = {this.irParaVerPlaylists}/>
    case "Ver Playlists":
      return <VerPlaylists irParaInformacoesPlaylists = {this.irParaInformacoesPlaylists}/>
    case "Informações da Playlist":
      return <InformacoesPlaylists irParaCriarPlaylists = {this.irParaCriarPlaylists}/>
    default:
      return <div>Página não encontrada!</div>
    

   } 

  }

  irParaCriarPlaylists = () =>{
    this.setState ({CriarPlaylists: "Criar Playlists"})

  }



  irParaVerPlaylists = () =>{
    this.setState ({CriarPlaylists: "Ver Playlists"})
    
  }

  
  irParaInformacoesPlaylists = () =>{

    this.setState ({CriarPlaylists: "Informações da Playlist"})
    
  }


  render () {

  

    return (
      <div>
        <GlobalStyle/>
        { <img className="tema" src={tema}/>}

        <Header>
          <h1>Labefy</h1>
        </Header>

        {this.escolheTela()}


      </div>


    )

  }


}










