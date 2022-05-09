import logo from './logo.svg';
import './App.css';
import React from"react"
import useRequestData from "../src/hooks/useRequestData";
import { BrowserRouter } from "react-router-dom";
import Rotas from "../src/Rotas/Rotas";

const App = () => {
  //1° Requisi
  // const jogos = useRequestData(
  //   "https://brainn-api-loterias.herokuapp.com/api/v1/loterias"
  // );

  // console.log(jogos);

  // const jogosLoterias =
  //   jogos &&
  //   jogos.map((jogo) => {
  //     return <h1>{jogo.nome}</h1>;
  //   });

  // 2ª Requisi
  // const concursos = useRequestData ("https://brainn-api-loterias.herokuapp.com/api/v1/loterias-concursos")

  // console.log(concursos)
  // const jogosConcursos = concursos && concursos.map((concurso) => {
  //   return <h1>{concurso.concursoId}</h1>;
  // });

  return (
    <div>
      {/* {jogosLoterias}
      {jogosConcursos} */}
      <BrowserRouter>
          <Rotas/>
    </BrowserRouter>
      
    </div>

    // {/* {jogosLoterias} */}


  );
};

export default App;

