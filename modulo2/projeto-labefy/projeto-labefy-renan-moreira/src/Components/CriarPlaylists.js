import React from "react"
import axios from "axios";

export default class CriarPlaylists extends React.Component {

    state = {
        
        nomePlaylist:""
    }

        playlistsNomes = (event) =>{
            this.setState({nomePlaylist:event.target.value})
        }

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
      
    //   adicionarPlaylist = () =>{
    //       console.log (this.state)
    //   }

    render () {

        return (
            <div>
                <button onClick ={this.props.irParaVerPlaylists}> Acessar Playlists</button>
                <h2> Crie sua PlayList personalizada!</h2>
                <input placeholder ={"Nome da Playlist"} value ={this.state.nomePlaylist} onChange ={this.playlistsNomes} />
               
                <button onClick = {this.criaPlaylists}> Adicionar</button>
                


            </div>


        )



    }

}