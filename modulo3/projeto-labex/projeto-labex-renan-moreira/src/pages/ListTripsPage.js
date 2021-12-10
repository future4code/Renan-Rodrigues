
import { useHistory } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios";


export const ListTripsPage = () =>{

const history = useHistory ()

const irParaHome = () =>{
history.push ("/")

}

const irParaIncreverViagens = () =>{
 history.push ("/trips/application")

}

const [listTrips, setListTrips] = useState ([]);
// const [listTripsName, setListTripsName] = useState ("");


  useEffect(() => {
    axios
      .get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/renan-moreira-carver/trips")
      .then((res) => {
        console.log (res.data);
        setListTrips(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // const onChangeName = (event) => {
  //   setListTripsName(event.target.value);
  // };

//  mapListaTrips = listTrips.map ((viagem)=>{
//     return (
//      <div>
 
//         <p>Nome: {viagem.name}</p>
//         <p>Descrição: {viagem.description}</p>

//         </div>
    
//     )

// })




//   const getTrip = () => {
//     axios
//       .get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/renan-moreira-carver/trips")
//       .then((res) => {
//         console.log (res.data)
//         setListTrips (res.data)

//       })
//       .catch((error) => {
//         // console.log(error.response.data);
        
//       });
//   };
//   useEffect(() => {
//     getTrip();
//   }, []);

  

    return (

        <div>
        
        <p> ListTripsPage </p>

        <button onClick ={irParaHome}> Voltar </button>
        <button onClick ={irParaIncreverViagens}> Inscreva-se </button>
        {/* {listTrips} */}
       
        {/* <select onChange={onChangeName}>
        <option value={""}>Nenhum</option>
        {listTrips.map((viagens) => {
          return (
            <option key={viagens.name} value={viagens.name}>
           {viagens.name}
            </option>
          );
        })}
      </select> */}
      {/* {listTripsName} */}
      {/* {pokeName && <PokeCard pokemon={pokeName} />} */}


    

        {/* <select onChange={onChangeName}>
        <option value={""}>Nenhum</option>
        {listTrips.map((trips) => {
          return (
            <option key={trips.name} value={trips.name}>
              {trips.name}
            </option>
          );
        })}
      </select> */}

        </div>

    )


}