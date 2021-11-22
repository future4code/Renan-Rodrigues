import React from "react"
import axios from "axios";
// import  GlobalStyle  from './Components/styles'
import styled from 'styled-components';

const CardInicial = styled.div`

padding: 10px;
margin:  50px;
margin-left: 500px;


`


export default class CriarPlaylists extends React.Component {

    state = {
        
        nomePlaylist:"",
        minhasMusicas: [],
        nomeMusica:"",
        artistaMusica:"",
        url:"",
        musicaId: ""
    }

    onChangeID = (event) =>{
      this.setState({musicaId: event.target.value})
    
    }

    onChangePlaylist = (e) => {
      this.setState({ nomePlaylist: e.target.value });
    
    };

       onChangeMusica = (e) => {
    this.setState({ nomeMusica: e.target.value });
  
  };
  onChangeArtistaMusica = (e) => {
    this.setState({ artistaMusica: e.target.value });
  
  };


    criaPlaylists = () => {
        const body = {
          name: this.state.nomePlaylist
        };
        axios
          .post(
            " https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
            body,
            {
              headers: {
                Authorization: "renan-rodrigues-carver"
              }
            }
          )
          .then(() => {
            alert ("Adiconada com sucesso!")
            this.setState ({nomePlaylist:""})
          })
          .catch((err) => {
              alert (err.response.data.message)
            console.log(err.response);
          });
      };
      
      adicionarMusica = (id) => {
        const body = {
          name: this.state.nomeMusica,
          artist: this.state.artistaMusica,
          url:"http://spoti4.future4.com.br/1.mp3"
        };
        axios
          .post(
            `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`,
            body,
            {
              headers: {
                Authorization: "renan-rodrigues-carver"
              }
            }
          )
          .then(() => {
            alert ("Adiconada com sucesso!")
            this.setState ({nomeMusica:"", artistaMusica:"", url:""})
            console.log(this.setState)
          })
          .catch((err) => {
              alert (err.response.data.message)
            console.log(err.response);
          });
      };

    render () {

  
        return (
          
          <div>
            <button onClick ={this.props.irParaVerPlaylists}> Acessar Playlists</button>
            <CardInicial>
              
              
                <h3> Crie sua PlayList personalizada!</h3>
                <input placeholder ={"Nome da Playlist"}className="texto-inserido" value ={this.state.nomePlaylist} onChange ={this.onChangePlaylist} />
               
                <button onClick = {this.criaPlaylists}> Adicionar</button>

                <h3> Adicione Artistas</h3>
                <input placeholder ={"Nome do Artista"} value ={this.state.nomeMusica} onChange ={this.onChangeMusica} />
               
                <button onClick = {this.adicionarMusica}> Adicionar</button>
                <h3> Adicione Músicas</h3>
                <input placeholder ={"Nome da Música"} value ={this.state.artistaMusica} onChange ={this.onChangeArtistaMusica} />
               
                <button onClick = {this.adicionarMusica}> Adicionar</button>
                
                
            </CardInicial>
          </div>

        )



    }

}