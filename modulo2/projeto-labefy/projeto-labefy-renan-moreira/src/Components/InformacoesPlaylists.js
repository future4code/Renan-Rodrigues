import React from "react"

export default class InformacoesPlaylists extends React.Component {

    render () {

        return (
            <div>

                <button onClick ={this.props.irParaCriarPlaylists}> Criar nova Playlist </button>
                <h2> Informações da Playlist </h2>

                
            </div>


        )



    }

}