
import React from "react";
import Etapa2 from "./Etapa2";
import Etapa3 from "./Etapa3";
import Final from "./Final";

export default class Etapa1 extends React.Component {


render (){

return (
    <div>
        <h1> ETAPA 1 - DADOS GERAIS </h1>

        <p>1. Qual seu nome?</p>
        <input placeholder ={"digite seu nome"}/>
        
        <p>2. Qual sua idade?</p>
        
        <input placeholder ={"digite sua idade"}/>

        <p>3. Qual seu email?</p>
        
        <input placeholder ={"digite seu email"}/>

        <p>4. Qual sua escolaridade?</p>
        <select>
            <option value ="Ensino médio incompleto"> Ensino médio incompleto </option> 
            <option value ="Ensino médio completo"> Ensino médio completo </option>
            <option value ="Ensino superior incompleto"> Ensino superior incompleto </option>
            <option value ="Ensino superior completo"> Ensino médio completo </option>
        </select>
        
        
        






        


    </div>






)


}




}





// const Etapa1 =() => {
 
//     const perguntasEtapa1 =[ 
//         {nome: "1. Qual seu nome?"},
//         {idade:"2.Qual sua idade?"},
//         {email:"3. Qual seu email?"},
//         {escolaridade:"4. Qual a sua escolaridade?"}
//     ]

//     const formsEtapa1 = listaDaEtapa1.map ((dados1) => {
    

//     return (
//     <div>
//       <p>{dados1.nome}</p>

//     </div>
//   );
// })


// return (
//     <div>
//         <h1>ETAPA 1 - DADOS GERAIS</h1>
//         {formsEtapa1}



//     </div>
    
// )
// }


