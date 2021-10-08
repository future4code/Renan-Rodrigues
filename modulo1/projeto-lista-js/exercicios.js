// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
// function soma(num1, num2) {
//   // implemente sua lógica aqui
//   return num1 + num2
// }

// EXERCÍCIO 0B
// function imprimeMensagem() {
//   // implemente sua lógica aqui
//   const mensagem = prompt('Digite uma mensagem!')

//   console.log(mensagem)
// }

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01

function calculaAreaRetangulo() {
  const altura = Number(prompt ("Digite uma altura"))
  const largura = Number(prompt ("Digite uma largura"))
  const area = (altura * largura)
  console.log (area)
}

// // EXERCÍCIO 02

function imprimeIdade() {
  const anoAtual = Number (prompt("Qual o ano atual?"))
  const anoDeNascimento = Number (prompt("Qual seu ano de nascimento?")) 
  const idade = anoAtual - AnoDeNascimento

  console.log (idade)
}

// EXERCÍCIO 03

function calculaIMC(peso, altura) {

return (peso/(altura**2))
 
}


// // EXERCÍCIO 04

 function imprimeInformacoesUsuario() {
 const nome = prompt ("Digite seu nome")
 const idade = Number(prompt("Digite sua idade"))
 const email = prompt ("Digite seu email")
 const fraseFinal = (`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

console.log (fraseFinal)
 }


// // EXERCÍCIO 05

function imprimeTresCoresFavoritas() {
  const cor1 = prompt("Digite uma cor")
  const cor2 = prompt ("Digite outra cor")
  const cor3 = prompt ("Digite outra cor")

  const coresFavoritas = [cor1, cor2,cor3]
  
  console.log (coresFavoritas)
  
 }

// // EXERCÍCIO 06

function retornaStringEmMaiuscula(string) {
  
  return string.toUpperCase()

}

// // EXERCÍCIO 07

function calculaIngressosEspetaculo(custo, valorIngresso) {
  
  return (custo/valorIngresso)

}

// // EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  const mesmoTamanho = (string1==string2)
return mesmoTamanho
}

// // EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  
  return array [0]
}

// // EXERCÍCIO 10
function retornaUltimoElemento(array) {
 
  return array[array.length -1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // const primeiro = array[0]
  // const ultimo = array[array.length-1]
  

}

// EXERCÍCIO 12

function checaIgualdadeDesconsiderandoCase(string1, string2) {
  string1.toUppercase()
  string2.toUppercase()
  const comparacao = (string1 === string2)
  return comparacao

}

// // EXERCÍCIO 13
// function checaRenovacaoRG() {
//   // implemente sua lógica aqui

// }

// // EXERCÍCIO 14
// function checaAnoBissexto(ano) {
//   // implemente sua lógica aqui

// }

// // EXERCÍCIO 15
// function checaValidadeInscricaoLabenu() {
//   // implemente sua lógica aqui
