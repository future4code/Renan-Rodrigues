
//EXERCÍCIO DE INTERPRETAÇÃO DE CÓDIGO

//1) ITEM A) Código quer testar se o número é par ou impar.
// ITEM B) para todos os números pares.
//ITEM C) para todos os números ímpares.

//2) ITEM A) Para saber quanto custa cada fruta selecionada
//ITEM B) "O preço da fruta maçã é R$ 2.25"
//ITEM C) Irá impimirir a resposta correspondente a fruta pêra

//3) ITEM A) está pedindo para digitar um número qualquer
//ITEM B) se o numero for "10", aparecerá a mensagem > "Esse número passou no teste", se for o número for "-10" aparecerá ""Essa mensagem é secreta!!!""
// ITEM C)

// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)


//EXERCÍCIO ESCRITA DE CÓDIGO

//1) Faça um programa que pergunta ao usuário qual a idade dele e 
//imprima no console se ele/ela pode dirigir (apenas maiores de idade).


// const idadeDoUsuario = Number(prompt ("Qual a sua idade?"))

// if (idadeDoUsuario >= 18){
//     console.log ("Você pode dirigir")
// } else {
//     console.log ("Você não pode dirigir")
// }

//2)Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno).
//Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else

// const turnoDoAluno = prompt ("Qual turno você estuda? Digite: (M) para Matutino, (V) para Vespertino ou (N) para Noturno?")

// if (turnoDoAluno ==="M"){
//     console.log ("Bom dia, aluno!")

// }else if (turnoDoAluno ==="V"){
// console.log ("Boa tarde, aluno!")

// }else if(turnoDoAluno ==="N"){
// console.log ("Boa noite, aluno!")
// }

//3) USANDO O MÉDODO SWITCH CASE

// const turnoDoAluno = prompt ("Qual turno você estuda? Digite: (M) para Matutino, (V) para Vespertino ou (N) para Noturno?")

// switch (turnoDoAluno) {
//     case "M":
//         console.log ("Bom dia, aluno!")
//         break;
//     case "V":
//         console.log("Boa tarde, aluno!")
//         break;
//     case "N":
//         console.log ("Boa noite, aluno")
//         break;
//     default:
//         console.log ("Digite uma opção válida")
// }

//4)Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele
// for do gênero fantasia e se o ingresso está abaixo de 15 reais.  Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir 
//e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. 
//Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("


// const generoDoFilme = prompt("Qual o gênero do filme que você vai querer assistir?")
// const valorDoIngresso = Number(prompt("Quanto você tem para comparar o ingresso?"))

// if (generoDoFilme === "Fantasia" && valorDoIngresso >= 15){
//     console.log ("Bom filme!")
// }else{
//     console.log("Escolha outro filme")
// }

// DESAFIOS:

//1)

// const generoDoFilme = prompt("Qual o gênero do filme que você vai querer assistir?")
// const valorDoIngresso = Number(prompt("Quanto você tem para comparar o ingresso?"))
// const lanchinho = prompt ("Qual lanchinho você vai querer?")

// if (generoDoFilme === "Fantasia" && valorDoIngresso >= 15){
//     console.log ("Bom filme!")
//     console.log (`Aproveite seu ${lanchinho}`)
// }else{
//     console.log("Escolha outro filme")
// }

// //2)
// const nomeCompleto = prompt ("Qual seu nome completo")
// const tipoDeJogo = prompt ("Qual o tipo de jogo? Digite (IN) para jogo Internacional ou (DO) para jogo Doméstico")
// const EtapaDoJogo = prompt ("Qual a etapa do jogo? Digite: (SF) para semi-final, (DT) para dicisão de terceiro lugar ou (FI) para final")
// const categoriaDoJogo = Number(prompt ("Indique uma categoria: 1, 2, 3 ou 4"))
// const quantidadeDeIngressos = Number(prompt("Quantos ingressos você vai querer?"))

// console.log (`Nome do Cliente: ${nomeCompleto}`)
// console.log (`Tipo do jogo:`)
// console.log ()
// console.log ()
// console.log ()

