

type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

console.log (pokemon1)

//b1) Criaria um arquivo ''.js'' dentro da pasta build e então rodaria o comando start para transpilar

//b2) Estando dentro da pasta src - > Usaria o comando "tsc para transpilar a linguagem para JS"
// De mod que ao rodar esse comando apareceria o mesmo arquivo sendo na extensão ".js", já transpilado.

//c) usando o tsc nome1.ts  nome2.ts..... transpilar todos de uma única vez.

