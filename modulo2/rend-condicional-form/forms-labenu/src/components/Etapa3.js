
import React from "react";
import Etapa2 from "./Etapa2";
import Etapa3 from "./Etapa3";
import Final from "./Final";

export default class Etapa1 extends React.Component {


    render () {
    return (
      <div>
        <h1>ETAPA 3 - INFORMAÇÕES GERAIS DO ENSINO</h1>

        <p> Por que você não terminou um curso de graduação ?</p>
        <input placeholder ={""}/>
        
        <p> Você fez algum curso complementar?</p>
        
        <input placeholder ={"digite uma unidade"}/>
        <select>
            <option value ="Nenhum"> Nenhum </option> 
            <option value ="Curso Técnico"> Curso Técnico </option>
            <option value ="Curso de Inglês"> Curso de Inglês </option>
          
        </select>
        

  
      </div>
    );
    }
  }