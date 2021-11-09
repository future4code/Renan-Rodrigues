import logo from './logo.svg';
import './App.css';
import React from 'react';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Final from './components/Final';

export default class App extends React.Component{

  state = {
    Etapa: 1
  }
  
    irProximaEtapa =() =>{
      this.setState({
        etapa: this.renderizaEtapa () +1
    })
    
    }
  

   renderizaEtapa = () =>{

    switch (this.state.etapa) {
      case 1:
      return <Etapa1/>
      case 2:
      return <Etapa2/>
      case 3:
      return <Etapa3/>
      case Final:
      return <Final/>
      
      default:
        return <p> não há mais páginas...</p>
      
    }
  }



  render () {

return (
<div>

{this.renderizaEtapa()}

{/* <button onClick = {this.proximaEtapa}>Próxima Etapa</button> */}

{this.state.etapa >2 || <button>Próxima Etapa</button>}


</div>

)

  }


}
