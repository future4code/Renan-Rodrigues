import React from "react"
import axios from "axios";
import styled from "styled-components";

const CardPlaylists = styled.div`
padding: 10px;
margin:  30px;
margin-left: 380px;
width: 100px;
display:flex;
flex-direction:column;
align-items:center; 

`
export default class VerPlaylists extends React.Component {

    state = {
        minhasPlaylists:[],
        playlistId:""
        
       
    }

   componentDidMount () {
       this.mostraPlaylists()
   }
   
   

   onChangeID = (event) =>{
    this.setState({playlistId: event.target.value})
  
  }



    mostraPlaylists = (id) => {
            const url ="https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
            axios.get(url,{
                headers: {
                    Authorization: "renan-rodrigues-carver"
                }
            })
            .then((res) => {
            //   console.log (this.setState)
                this.setState({minhasPlaylists:res.data.result.list})
             
              })
              .catch((err) => {
                  alert("Erro encontrado, tente novamente!")
               
              });
          };

          deletaPlaylists = (id) => {
            const url =`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
            
            axios.delete(url,{
                headers: {
                    Authorization: "renan-rodrigues-carver"
                }
            })
            .then((res) => {
                alert ("Playlist deletada com sucesso!")
              
              this.mostraPlaylists()
            //   this.setState({minhasPlaylists:res.data.result.list})
            console.log (res)
             
              })
              .catch((err) => {
                  alert("Erro encontrado, tente novamente!")
                // console.log(err.response.data)
               
              });
          };

         
        
          render (){
            const listaPlaylists = this.state.minhasPlaylists.map((itens) => {
              
                return (
                <CardPlaylists key={itens.id}> {itens.name} <button className="botao-deletar" onClick={()=> this.deletaPlaylists(itens.id)}>Deletar Playlist</button></CardPlaylists>
                
                )
                
              
            })
                           

            return (
                <div>
                    <button onClick ={this.props.irParaInformacoesPlaylists}> Detalhes da Playlist</button>
                    <h2 className="texto-pag2"> Minhas Playlists</h2>  
                <CardPlaylists>
                     {listaPlaylists}
                </CardPlaylists>
                </div>
            )

          }
            
        }
    