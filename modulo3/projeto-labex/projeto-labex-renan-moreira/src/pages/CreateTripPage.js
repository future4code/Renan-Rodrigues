import React from "react"
import { useHistory } from "react-router-dom"
import useForm from "../hooks/useForm";
import styled from 'styled-components';

export const CreateTripPage = () =>{
    const Form = styled.div`
   
    border:solid 10px black;
    padding:30px;
    display:grid;
    flex-direction: 1fr;
    
    ` 


const history = useHistory ()

const voltarParaPainelAdm = () =>{
history.push ("/admin/trips/list")

}


const formularioPage = () =>{
history.push ("/admin/trips/list")
    
}

const { forms, onChange, cleanFields } = useForm({
    name: "",
    planet: "",
    date: "",
    description:"",
    durationInDays:""

  });

  const cadastrar = (event) => {
    event.preventDefault();
    console.log("Formulário enviado!", forms);
    cleanFields();
  };

    return (

        <div>
        
        <p> CRIAR VIAGEM! </p>
        <button  onClick ={voltarParaPainelAdm}> Voltar </button>
        <button  onClick ={formularioPage}> Cadastrar </button>
        

        <Form className="Create-Form" onSubmit={cadastrar}>

        <input
          name={"name"}
          value={forms.name}
          onChange={onChange}
          placeholder="Nome"
          required
          pattern={"^.{3,}"}
          title={"O nome deve ter no mínimo 3 letras"}
        />
      
        <select
          name={"planet"}
          value={forms.planet}
          onChange={onChange}
          placeholder="Escolha um Planeta"
          
        >
         <option > Saturno </option>   
         <option > Plutão </option>
         <option > Marte </option>

        </select>
      
        <input
          name={"date"}
          value={forms.datel}
          onChange={onChange}
          placeholder="dd/mm/aa"
          required
          type={"date"}
        />

        <input
          name={"description"}
          value={forms.description}
          onChange={onChange}
          placeholder="Descrição"
          required
          pattern={"^.{30,}"}
          title={"A descrição deve ter no mínimo 30 caracteres"}
          
        />

        <input
          name={"durationInDays"}
          value={forms.durationInDays}
          onChange={onChange}
          placeholder="Duração em dias"
          required
          type={"number"}
          pattern={"^.{20,}"}
          title={"Viagem mínima de 20 dias"}
        />
        
     
        <button  onClick ={""}> Cadastrar </button>
      </Form>


        </div>

    )


}