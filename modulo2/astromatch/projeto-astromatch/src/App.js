
import React from "react"
import axios from "axios"
import { useState,useEffect} from "react"
import Tela1 from "./componentes-Tela1/Tela1"
import Tela2 from "./componentes-Tela2/Tela2"

function App(props) {

  const [Tela1, setTela1] = useState ("")
  const [Tela2, setTela2] = useState ("")


  const escolheTela = () =>{

    switch (Tela1) {
      case "Mostrar Tela Inicial":
        return <Tela1 irParaTela2 = {irParaTela2} />
      case "Mostrar Segunda Tela":
        return <Tela2 irParaTela1 = {irParaTela1} />
        default:
          return <div>Página não encontrada!</div>



    }

  }

  
  

 const irParaTela1 = () =>{
  setTela1(Tela1)

 }

 const irParaTela2 = () =>{
  setTela1(Tela1)

 }


  return (
    <div>
      Olá
      {escolheTela()} 
      
       {/* <Tela1 tela={"irParaTela2"}/> */}
      

    </div>
  );
}

export default App;
