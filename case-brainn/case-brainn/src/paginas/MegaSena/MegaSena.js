import React from "react";
import { useHistory } from "react-router-dom";
import { verQuina } from "../../Rotas/Coordenada";
import { verLotoFacil } from "../../Rotas/Coordenada";
import { verLotoMania } from "../../Rotas/Coordenada";
import { verTimeMania } from "../../Rotas/Coordenada";
import { verDiaDeSorte} from "../../Rotas/Coordenada";
import { PainelJogos, Resultado } from "./styled";
import { ButtonJogos } from "./styled";
import useRequestData from "../../hooks/useRequestData";
import styledComponents from "styled-components";
import megaSena from "../../img/megaSena.png"
import { FundoPadrao } from "./styled";
import { Texto1 } from "./styled";
import { Texto2 } from "./styled";
import logo from "../../img/logo.png"
import { Logo } from "./styled";
import { LoteriaNumeros } from "./styled";
import { LoteriaData } from "./styled";
import { Footer } from "./styled";


const MegaSena = () => {
  const history = useHistory ()
  
  const jogosLoterias = useRequestData(
    "https://brainn-api-loterias.herokuapp.com/api/v1/loterias");

    const onClick = (id) => {
      verQuina (history, id)

  }

    console.log ("veja aqui", jogosLoterias)
    const loterias = jogosLoterias && jogosLoterias.map ((jogo)=>{
      return (
        <div>
        
        {jogo.id}
        {jogo.nome}
        onClick = {() => onClick (jogo.id)}
        
         </div>
        
       
      )

    })




  const jogoMegaSena = useRequestData(
    "https://brainn-api-loterias.herokuapp.com/api/v1/concursos/2359");

    console.log ("ver aqui",jogoMegaSena)


  return (
    
    <div>
      <FundoPadrao src ={megaSena}/>
      <Logo src ={logo}/>
       <LoteriaNumeros>
       <h2>{jogoMegaSena.numeros}</h2>
       </LoteriaNumeros>
       <LoteriaData>
       <h4>{jogoMegaSena.data}</h4>
       </LoteriaData>
        <Texto1>
        <h1>Consultar Loterias disponíveis</h1>
        </Texto1>
        <Texto2>
          <h1>Loteria atual</h1>
          <h2>MegaSena</h2>
        </Texto2>
      <PainelJogos>
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
