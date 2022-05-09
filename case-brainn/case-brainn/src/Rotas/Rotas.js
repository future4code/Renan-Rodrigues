import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import MegaSena from "../paginas/MegaSena/MegaSena";
import Quina from "../paginas/Quina/Quina";
import LotoFacil from "../paginas/LotoFacil/LotoFacil";
import LotoMania from "../paginas/LotoMania/LotoMania";
import TimeMania from "../paginas/TimeMania/TimeMania";
import DiaDeSorte from "../paginas/DiaDeSorte/DiaDeSorte";

const Rotas = () => {
  return (
    <Switch>
      <Route exact path="/">
        <MegaSena />
      </Route>
      <Route exact path="/quina">
        <Quina />
      </Route>
      <Route exact path="/lotofacil">
        <LotoFacil />
      </Route>
      <Route exact path="/lotomania">
        <LotoMania />
      </Route>
      <Route exact path="/timemania">
        <TimeMania />
      </Route>
      <Route exact path="/diadesorte">
        <DiaDeSorte />
      </Route>
    </Switch>
  );
};

export default Rotas;
