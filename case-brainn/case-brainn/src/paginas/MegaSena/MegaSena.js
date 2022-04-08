import React from "react";
import { useHistory } from "react-router-dom";
import { verQuina } from "../../Rotas/Coordenada";
import { verLotoFacil } from "../../Rotas/Coordenada";
import { verLotoMania } from "../../Rotas/Coordenada";
import { verTimeMania } from "../../Rotas/Coordenada";
import { verDiaDeSorte} from "../../Rotas/Coordenada";
import { PainelJogos } from "./styled";
import { ButtonJogos } from "./styled";
import useRequestData from "../../hooks/useRequestData";
import styledComponents from "styled-components";
import megaSena from "../../img/megaSena.png"
import { FundoPadrao } from "./styled";

const MegaSena = () => {
  const history = useHistory ()
  
  const jogoMegaSena = useRequestData(
    "https://brainn-api-loterias.herokuapp.com/api/v1/concursos/440");

    console.log ("ver aqui",jogoMegaSena)
//  const megaSena = jogoMegaSena && jogoMegaSena.map((mega) => {
//       return <h1>{mega}</h1>;
    
//     });
//     console.log("olhar aqui",megaSena)

  return (
    <div>
      <FundoPadrao src ={megaSena}/>
        {/* {megaSena} */}
        
      <PainelJogos>
        <h2>Loteria Atual</h2>
      <h1> Lotorias Disponíveis Abaixo </h1>
      <ButtonJogos onClick={() => verQuina(history)}>
        <p>Quina</p> 
      </ButtonJogos>
      <ButtonJogos onClick={() => verLotoFacil(history)}>
        <p>LotoFácil</p>
      </ButtonJogos>
      <ButtonJogos onClick={() => verLotoMania(history)}>
      <p>LotoMania</p>
      </ButtonJogos>
      <ButtonJogos onClick={() => verTimeMania(history)}>
        <p>TimeMania</p>
      </ButtonJogos>
      <ButtonJogos onClick={() => verDiaDeSorte(history)}>
        <p>DiaDeSorte</p>
      </ButtonJogos>
      </PainelJogos>
      
    </div>
  );
};

export default MegaSena;
