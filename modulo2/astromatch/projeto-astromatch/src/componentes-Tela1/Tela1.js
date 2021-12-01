import React from "react"
import axios from "axios"
// import Tela2 from "./Componentes-Tela2/Tela2"

function Tela1(props) {
    return (
      <div >
        <button onClick = {props.tela}> Lista de Mat's</button>
      </div>
    );
  }
  
  export default Tela1;
  