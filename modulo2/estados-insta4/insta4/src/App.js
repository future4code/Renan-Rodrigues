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
  render() {
    return (
      <MainContainer>

        <Post
          nomeUsuario={'Larissa'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/201/151'}
        />
        <Post
          nomeUsuario={'Renan'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/202/152'}
        />
        <Post
          nomeUsuario={'Marcelo'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/203/153'}
        />


      </MainContainer>
      
    );
  }
}

export default App;
