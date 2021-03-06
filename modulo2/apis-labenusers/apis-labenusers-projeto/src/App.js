
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

  <h3>CADASTRO DE USU??RIOS!</h3>
  <input placeholder={"Nome do Usu??rio"} value = {this.state.inputName} onChange ={this.onChangeName} />
  
  <input placeholder={"Email do Usu??rio"} value = {this.state.inputEmail} onChange ={this.onChangeEmail}/>

  <button onClick ={this.createUser} > Cadastrar </button>

<br />

<h3>LISTA DE USU??RIOS CADASTRADOS!</h3>
<button onClick={this.getAllUsers}> Mostrar Lista de Usu??rios  </button>
{
this.state.usuarios.map((cadastrados) => {
  if (cadastrados.name){
    return <p key={cadastrados.id}> {cadastrados.name} - {cadastrados.id} </p>
  }


})

}
<br/>

<h3>DELETAR USU??RIO (ID)!</h3>

<input value={this.state.userId}placeholder={"Deletar Usu??rio"} onChange={this.onChangeID} />
<button onClick = {() => this.DeletaUsuarioId(this.state.userId)}> Deletar Usu??rio </button>

</div>



)

}


}


























