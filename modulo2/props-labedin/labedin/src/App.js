import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import styled from 'styled-components'
// import EstiloCardPequeno from './components/EstiloCardPequeno';


const ContainerApp = styled.div `

 
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  
`

const Titulo1 = styled.h2 `
  color: orange;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  font-family:'Courier New', Courier, monospace;

`
const divisoesContainer = styled.div `

width: 40vw;
margin: 10px 0;
background-color: red;

`


// const EstiloCardPequeno = styled.div `

// background-color: orange;

// `


function App() {
  return (
    <ContainerApp>
      <divisoesContainer>
        <Titulo1>Dados pessoais</Titulo1>
        <CardGrande 
          imagem="renanfoto.jpg" 
          nome="Renan Rodrigues" 
          descricao="Olá, me chamo Renan Rodrigues, tenho 25 anos e resido em Fortaleza-CE."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
        <CardPequeno 
        ContatoEmail ="Email: devrenan02@labenu.com"
        endereco ="Endereço: R. Pais Leme, 215,Conjunto 820 Pinheiros" 
        />

      </divisoesContainer>

      <divisoesContainer>
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Atualmente, estudo desenvolvimento Web FullStack na LABENU! Tenho como principais expericências, o desenvolvimento de Projetos Web com HTML + CSS" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </divisoesContainer>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </ContainerApp>
  );
}

export default App;
