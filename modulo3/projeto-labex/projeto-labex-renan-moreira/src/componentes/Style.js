

import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle `

*{  margin:0;
    padding:0;
    font-family: 'Readex Pro', sans-serif;

    

  }

body {
    background: black;
    
}


.home {

    color: orange;
    margin: 40px;

}

.tema{

width: 25%;
height: 550px;

margin-left: 150px;
/* padding: 50px; */
border:solid 5px orange;
    border-top:none;
    border-left:none;
    border-right:none;
    border-radius: 10px;
    

filter: opacity(70%);
     
}
.tema2 {
width: 23%;
/* height: 500px; */
margin-left: 150px;
/* padding: 50px; */
border:solid 2px gray;
border-top:none;
border-left:none;
border-right:none;
border-radius: 10px;

filter: opacity(60%);

}

.texto-login {

Color:white;
border: solid 1px red;
position: absolute;

/* filter: opacity(90%); */
bottom: 500px;
margin-left: 750px;
text-align:center;

}

.texto-apresentacao {
position: absolute;
color:orange;
background-color:black;
bottom: 480px;
margin-left: 30px;
}
.sub-texto-apresentacao{
position: absolute;
color:orange;
background-color:black;
bottom: 430px;
margin-left: 250px;

}
.Card-logo {


position: absolute;
/* filter: opacity(90%); */
bottom: 300px;
margin-left: 750px;
text-align:center;

}

.Card-Login {
border: solid 1px red;
position: absolute;

filter: opacity(90%);
bottom: 350px;
margin-left: 730px;
text-align:center;
display:grid;
columns: 1fr;

}

.CardBotao-Viagens {

    height: 80px;
    width: 300px;
    border-radius: 40px;
}
.CardBotao-Adm {

height: 30px;
width: 100px;
display:flex;

.Create-Form{
    
display:flex;

border:solid 1px;

}


}













`
