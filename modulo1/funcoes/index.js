// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO:

//1) a) Os valores: 10 e 50 ; b) continuaria os valores 10 e 50, mas não aparecia nada no console.

// function minhaFuncao(variavel){
//     return variavel * 5
// }

// minhaFuncao(2)
// minhaFuncao(10)

//2) a) Essa função irá pegar qualquer texto do usuário transformar tudo em letras minuscula
// e quando aparecer a palavra "cenoura" ou bem parecido com ela, vai me retonar com um valor "true", caso contrário "false"

// b) I - Eu gosto de cenoura - true; II - CENOURA é bom para vista - true ; III- Cenouras crescem na terra - true

// let TextoDoUsuário = prompt ("Insira um texto");

// const outraFuncao = function (texto){
//     return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao (TextoDoUsuário)
// console.log(resposta)

//EXERCÍCIOS DE ESCRITA DE CÓDIGO?

//1) ITEM A) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem 
//falando algumas informações sobre você

// function MeusDados (){
    
// }
// console.log("Eu sou Renan, tenho 25 anos, moro em Fortaleza e sou estudante da LABENU")

//ITEM B)Agora escreva uma função que receba 4 parâmetros que correspondem às informações
// de uma pessoa: o nome (string), a idade (number), a cidade (string) e uma profissão (string). 
//Ela deve retornar uma string que unifique todas as informações da pessoa em uma 
//só mensagem com o template:

// function MinhasInformacoes (nome, idade, cidade, profissao){
// const fraseFinal= `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`
// return  fraseFinal 
// }

// const informacoes = MinhasInformacoes("Renan",25,"Fortaleza", "estudante")
// console.log (informacoes)

//2) ITEM A) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas
// e retorne o resultado. Invoque a função e imprima no console o resultado.

// function somar (numeroA, numeroB){
// const soma = numeroA + numeroB
// return soma
// }

// const resultado = somar(10,5)
// console.log (resultado)

//ITEM B) Faça uma função que recebe 2 números e retorne um booleano que informa se 
//o primeiro número é maior ou igual ao segundo.

// function numeros (numeroA, numeroB){

// const numeroMaiorIgual = numeroA >= numeroB
// return numeroMaiorIgual

// } 

// const resultado = numeros(15,12)
// console.log (resultado)


//ITEM C)Escreva uma função que receba um número e devolva um booleano 
//indicando se ele é par ou não:

// function MeuNumero (numero1) {

// const ParOuImpar = (numero1 % 2==0)
// return ParOuImpar
// }

// const resultado = MeuNumero (44)
// console.log (resultado)

// ITEM D)

// function MeuTexto (texto){
// console.log ("tamanho do texto:", texto.length)
// console.log (texto.toUpperCase())
// }

// MeuTexto ("boa tarde, sou aluno Renan da LABENU")


//3)


//  function somar (numeroA, numeroB){
//  const soma = numeroA + numeroB
//  return soma
//  }


// function subtrair (numeroA, numeroB){
// const subtraia = numeroA - numeroB
// return subtraia
// }
// function multiplicar (numeroA,numeroB){
// const multiplica = numeroA * numeroB
// return multiplica
// }

// function dividir (numeroA,numeroB){
// const divida = numeroA / numeroB
// return divida
// }

// const NumeroEscolhidos1 = Number (prompt ("Escolha um número"))
// const NumeroEscolhidos2 = Number (prompt ("Escolha outro número"))
// console.log ("Números inseridos:", NumeroEscolhidos1, "e", NumeroEscolhidos2)

// const resultado1 = somar (NumeroEscolhidos1,NumeroEscolhidos2)
// console.log ("Soma:", resultado1)

// const resultado2 = subtrair (NumeroEscolhidos1,NumeroEscolhidos2)
// console.log ("Diferança:", resultado2)

// const resultado3 = multiplicar (NumeroEscolhidos1,NumeroEscolhidos2)
// console.log ("Multiplicação:", resultado3)

// const resultado4 = dividir (NumeroEscolhidos1,NumeroEscolhidos2)
// console.log ("Divisão:", resultado4)