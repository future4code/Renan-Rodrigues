import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {

    state ={

      posts: [

      {
        nomeUsuario:'Larissa',
        fotoUsuario:'https://picsum.photos/51/51',
        fotoPost:'https://picsum.photos/201/151'
      },

      {
        nomeUsuario:'Renan',
        fotoUsuario:'https://picsum.photos/52/52',
        fotoPost:'https://picsum.photos/202/152'
      },

      {
        nomeUsuario:'Marcelo',
        fotoUsuario:'https://picsum.photos/50/50',
        fotoPost:'https://picsum.photos/203/153'
      }
      
      ],

      valorInputPessoa: "",
      valorInputFotoPerfil:"",
      valorInputFotoPostagem: "",
      

    }
  
      adicionarUsuario = () =>{

        const novoUsuario = {

          nome: this.state.valorInputPessoa,
          fotoPerfil: this.state.valorInputFotoPerfil,
          fotoPostagem: this.state.valorInputFotoPostagem
        }

        const novosUsuarios = [...this.state.posts, novoUsuario]

        this.setState({posts:novosUsuarios})
      }

      onChangeInputPessoa = (event) =>{

        this.setState({valorInputPessoa: event.target.value})

      }

      onChangeInputFotoPerfil = (event) =>{
        this.setState({valorInputFotoPerfil: event.target.value})

      }

      onChangeInputFotoPostagem = (event) =>{
        this.setState({valorInputFotoPostagem: event.target.value})

      }


      render() {

        const listaDePosts = this.state.posts.map((dados) => {
    
          return <Post
            nomeUsuario={dados.nomeUsuario}
            fotoUsuario={dados.fotoUsuario}
            fotoPost={dados.fotoPost}
          />
        
        
        })
        
        const ListaNovosPosts = this.state.posts.map((postagem) => {
          return (
            <p>
              {postagem.nome} - {postagem.fotoPerfil} - {postagem.fotoPostagem}
            </p>
          );
        });
    
        return (
          <div>
            <div>
              <input
                value={this.state.valorInputPessoa}
                onChange={this.onChangeInputPessoa}
                placeholder={"Nome do Usuário"}
              />
              <input
    
                value={this.state.valorInputFotoPerfil}
    
                onChange={this.onChangefotoPerfil}
                placeholder={"Insira foto de Perfil"}
              />
              <input
    
                value={this.state.valorInputFotoPostagem}
                onChange={this.onChangeInputFotoPostagem}
                placeholder={"Poste sua foto"}
              />
              <button onClick={this.adicionarUsuario}>Adiconar Postagem </button>
            </div>
            <div>{ListaNovosPosts}</div>
            <MainContainer>{listaDePosts} </MainContainer>
          </div>
        );
      }
    }
    
    
    export default App;









      
  
