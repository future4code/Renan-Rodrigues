import React from "react";
import { useHistory } from "react-router-dom";
import { verMegaSena } from "../../Rotas/Coordenada";
import { verQuina } from "../../Rotas/Coordenada";
import { verLotoFacil } from "../../Rotas/Coordenada";
import { verLotoMania } from "../../Rotas/Coordenada";
import { verDiaDeSorte} from "../../Rotas/Coordenada";
import { PainelJogos} from "./styled";
import { ButtonJogos } from "./styled";
import useRequestData from "../../hooks/useRequestData";
import timeMania from "../../img/timeMania.png"
import { FundoPadrao } from "./styled";
import { Texto1 } from "./styled";
import { Texto2 } from "./styled";
import logo from "../../img/logo.png"
import { Logo } from "./styled";
import { LoteriaNumeros } from "./styled";
import { LoteriaData } from "./styled";

const TimeMania = () => {
  const history = useHistory ()
  const jogoTimeMania = useRequestData(
    "https://brainn-api-loterias.herokuapp.com/api/v1/concursos/1622");
  
  return (
    <div>
     <FundoPadrao src ={timeMania}/>
      <Logo src ={logo}/>

      <LoteriaNumeros>
       <h2>{jogoTimeMania.numeros}</h2>
       </LoteriaNumeros>
       <LoteriaData>
       <h4>{jogoTimeMania.data}</h4>
       </LoteriaData>
        <Texto1>
        <h1>Consultar Loterias disponíveis</h1>
        </Texto1>
        <Texto2>
          <h1>Loteria atual</h1>
          <h2>TimeMania</h2>
        </Texto2>

      <PainelJogos>
      <ButtonJogos onClick={() => verMegaSena(history)}>
        <p>MegaSena</p> 
      </ButtonJogos>
      <ButtonJogos onClick={() => verQuina(history)}>
        <p>Quina</p>
      </ButtonJogos>
      <ButtonJogos onClick={() => verLotoFacil(history)}>
      <p>LotoFacil</p>
      </ButtonJogos>
      <ButtonJogos onClick={() => verLotoMania(history)}>
        <p>LotoMania</p>
      </ButtonJogos>
      <ButtonJogos onClick={() => verDiaDeSorte(history)}>
        <p>DiaDeSorte</p>
      </ButtonJogos>
      </PainelJogos>
    </div>
  );
};

export default TimeMania;