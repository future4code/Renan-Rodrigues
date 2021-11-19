import React from "react"
import axios from "axios";
import styled from "styled-components";

const CardPlaylists = styled.div`
border: 1px solid black;
padding: 10px;
margin:  10px;
display:flex;


`
export default class VerPlaylists extends React.Component {

    state = {
        minhasPlaylists:[]
    }

   componentDidMount () {
       this.mostraPlaylists()
   }
   
    mostraPlaylists = (id) => {
            const url ="https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
            axios.get(url,{
                headers: {
                    Authorization: "renan-rodrigues-carver"
                }
            })
            .then((res) => {
              console.log (this.setState)
                this.setState({minhasPlaylists:res.data.result.list})
             
              })
              .catch((err) => {
                  alert("Erro encontrado, tente novamente!")
               
              });
          };

    
        
          render (){
            const listaPlaylists = this.state.minhasPlaylists.map((itens) => {
              
                return (<CardPlaylists key={itens.id}> {itens.nomePlaylist} - {itens.id} </CardPlaylists>)
              
            })

            console.log (listaPlaylists)
            return (
                <div>
                    <button onClick ={this.props.irParaInformacoesPlaylists}> Detalhes da Playlist</button>
                        <h2> Minhas Playlists</h2> 
                                    
                                {listaPlaylists}
                              


                </div>
            )

          }
            
        }
    // render() {
    //     // const listaPlaylists = this.state.minhasPlaylists.map((itens) => {
    //     //     return (<CardPlaylists key={itens.id}> {itens.nomePlaylist} </CardPlaylists>)
           
            
    //     // })
    
    //     return (
    //         <div>

    //         {/* //     <button onClick ={this.props.irParaInformacoesPlaylists}> Detalhes da Playlist</button>
    //         //     <h2> Minhas Playlists</h2> */}
                
    //             {/* {listaPlaylists} */}
                
    //             {/* {

    //             this.state.minhasPlaylists.map(itens => {
    //              return <CardPlaylists key={itens.id}> {itens.nomePlaylist} </CardPlaylists>
    //             })
              
    //              } */}
     
    //         </div>

    //     )
    // }
