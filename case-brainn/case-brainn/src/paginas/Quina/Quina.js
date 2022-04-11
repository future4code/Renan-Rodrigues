import React from "react";
import { useHistory } from "react-router-dom";
import { verMegaSena } from "../../Rotas/Coordenada";
import { verLotoFacil } from "../../Rotas/Coordenada";
import { verLotoMania } from "../../Rotas/Coordenada";
import { verTimeMania } from "../../Rotas/Coordenada";
import { verDiaDeSorte} from "../../Rotas/Coordenada";
import { PainelJogos} from "./styled";
import { ButtonJogos } from "./styled";
import useRequestData from "../../hooks/useRequestData";
import quina from "../../img/quina.png"
import { FundoPadrao } from "./styled";
import { Texto1 } from "./styled";
import { Texto2 } from "./styled";
import logo from "../../img/logo.png"
import { Logo } from "./styled";
import { LoteriaNumeros } from "./styled";
import { LoteriaData } from "./styled";

const Quina = () => {
  const history = useHistory ()
  const jogoQuina = useRequestData(
    "https://brainn-api-loterias.herokuapp.com/api/v1/concursos/5534");
  
  
    


  return (
    <div>
     <FundoPadrao src ={quina}/>
      <Logo src ={logo}/>

      <LoteriaNumeros>
       <h2>{jogoQuina.numeros}</h2>
       </LoteriaNumeros>
       <LoteriaData>
       <h4>{jogoQuina.data}</h4>
       </LoteriaData>
        <Texto1>
        <h1>Consultar Loterias disponíveis</h1>
        </Texto1>
        <Texto2>
          <h1>Loteria atual</h1>
          <h2>Quina</h2>
        </Texto2>

      <PainelJogos>
      <ButtonJogos onClick={() => verMegaSena(history)}>
        <p>MegaSena</p> 
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

export default Quina;