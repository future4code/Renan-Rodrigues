
import React from "react";
import Etapa2 from "./Etapa2";
import Etapa3 from "./Etapa3";
import Final from "./Final";

export default class Etapa1 extends React.Component {


    render () {
    return (
      <div>
        <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>

        <p>5. Qual seu curso?</p>
        <input placeholder ={"digite seu curso"}/>
        
        <p>6. Qual a unidade de ensino?</p>
        
        <input placeholder ={"digite uma unidade"}/>
        

  
      </div>
    );
    }
  }
  