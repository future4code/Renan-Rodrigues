import React from "react"
import axios from "axios";
import styled from "styled-components";

const CardInicial = styled.div`
border: 1px solid black;
padding: 10px;
margin:  10px;
width: 300px;
display:flex;
justify-content:space-between;

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

    //   const listaMusicas = this.state.minhasMusicas.map((music) => {
              
    //     return (
    //     <CardInicial key={music.id}> {music.artist}-{music.name} <button onClick={()=> this.adicionarMusica(music.id)}>Adicionar</button></CardInicial>
        

    //     )
        
      
    // })

      
        return (
            <div>
                <button onClick ={this.props.irParaVerPlaylists}> Acessar Playlists</button>

                
                <h2> Crie sua PlayList personalizada!</h2>
                <input placeholder ={"Nome da Playlist"} value ={this.state.nomePlaylist} onChange ={this.onChangePlaylist} />
               
                <button onClick = {this.criaPlaylists}> Adicionar</button>

                <h2> Adicione Artista</h2>
                <input placeholder ={"Nome do Artista"} value ={this.state.nomeMusica} onChange ={this.onChangeMusica} />
               
                <button onClick = {this.adicionarMusica}> Adicionar</button>
                <h2> Adicione Musica</h2>
                <input placeholder ={"Nome da Música"} value ={this.state.artistaMusica} onChange ={this.onChangeArtistaMusica} />
               
                <button onClick = {this.adicionarMusica}> Adicionar</button>
                {/* {listaMusicas} */}
                


            </div>


        )



    }

}