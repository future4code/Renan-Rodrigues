import React from "react"
import axios from "axios"

function Tela2(props) {
    return (
      <div className="App">
        Olá!!
        <button onClick = {props.irParaTela1}>Tela Inicial</button>
      </div>
    );
  }
  
  export default Tela2;
  