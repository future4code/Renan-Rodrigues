
import React from "react";
import axios from "axios";


export default class App extends React.Component {

state = {
  usuarios:[],
  inputName:"",
  inputEmail:"",
  userId:""

}


onChangeName = (e) => {
  this.setState({ inputName: e.target.value });

};

onChangeEmail = (e) => {
  this.setState({ inputEmail: e.target.value });

};

onChangeID = (event) =>{
  this.setState({userId: event.target.value})

}

getAllUsers = (id) => {
  axios
    .get(
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users      ",
      {
        headers: {
          Authorization: "renan-rodrigues-carver"
        }
      }
    )
    .then((res) => {
      // this.setState({usuarios: res.data.name.email });
      // this.setState({usuarios: res.data })
      // console.log(res.data.name.email);
      this.setState({usuarios:res.data})
    })
    .catch((err) => {
      console.log(err.res);
    });
};


createUser = () => {
  const body = {
    name: this.state.inputName,
    email: this.state.inputEmail
  };
  axios
    .post(
      " https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
      body,
      {
        headers: {
          Authorization: "renan-rodrigues-carver"
        }
      }
    )
    .then(() => {
      // this.setState({inputName: "", inputEmail:""})
      // this.getAllUsers()
      // console.log(this.setState)
      console.log ("SUCESSOOOO!")
    })
    .catch((err) => {
      console.log(err.response);
    });
};


DeletaUsuarioId = (id) => {
  axios
    .delete(
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/:id",
      {
        headers: {
          Authorization: "renan-rodrigues-carver"
        }
      }
    )
    .then((res) => {
      // this.setState({usuarios: res.data.name.email });
      // this.setState({usuarios: res.data })
      // console.log(res.data.name.email);
      this.setState({usuarios:res.data})
    })
    .catch((err) => {
      console.log(err.res);
    });
};

render () {
// const meusUsuarios = this.state.usuarios.map((cadastros) => {
// <li>{cadastros.name}
// {cadastros.email}</li>



return (
  <div>

  <h3>CADASTRO DE USUÁRIOS!</h3>
  <input placeholder={"Nome do Usuário"} value = {this.state.inputName} onChange ={this.onChangeName} />
  
  <input placeholder={"Email do Usuário"} value = {this.state.inputEmail} onChange ={this.onChangeEmail}/>

  <button onClick ={this.createUser} > Cadastrar </button>

<br />

<h3>LISTA DE USUÁRIOS CADASTRADOS!</h3>
<button onClick={this.getAllUsers}> Mostrar Lista de Usuários  </button>
{
this.state.usuarios.map((cadastrados) => {
  if (cadastrados.name){
    return <p key={cadastrados.id}> {cadastrados.name} - {cadastrados.id} </p>
  }


})

}
<br/>

<h3>DELETAR USUÁRIO (ID)!</h3>

<input value={this.state.userId}placeholder={"Deletar Usuário"} onChange={this.onChangeID} />
<button onClick = {() => this.DeletaUsuarioId(this.state.userId)}> Deletar Usuário </button>

</div>



)

}


}


























