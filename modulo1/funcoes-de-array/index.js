
// INTERPRETAÇÃO DE CÓDIGO

//1 A) irá imprimir todo as informações novamente (array), um abaixo do outro, contendo tabém a posição de cada elemento (índex)





//2 A) Irá imprimnir no console o array com os nomes


//3 A)Irá imprimir no console o array, com os nomes e apelidos, exceto o da "chijo" seja nome ou apelido.





// ESCRITA DE CÓDIGO

//1) Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize as operações pedidas nos itens abaixo 
//utilizando as funções de array map e filter:

// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]

//  a) Crie um novo array que contenha apenas o nome dos doguinhos

//  const pegarNomesPets = (cachorros) => {
//      return cachorros.nome
//  }

//  const listaPets = pets.map(pegarNomesPets)
//  console.log (listaPets)

// //  b)

//  const pegarNomesPets = (pets) =>{
//      if (pets.raca ==="Salsicha"){
//          return true
//      }
//  }

//  const cachorroSalsicha = pets.filter(pegarNomesPets)
//  console.log (cachorroSalsicha)

//C)

// const descontoParaCachorro = (pets) => {
//     if (pets.raca ==="Poodle"){

//         return true
//     }
// }

// const pegarNomesDePoodles = (item) => {
// return(`Você ganhou um cupom de desconto de 10% para tosar ${item.nome}`)

// }

// const descontoParaCachorro = poodlesDescontos.map(pegarNomesDePoodles)
// console.log (descontoParaCachorro)

// const cachorrosPoodle = pets.filter(descontoParaCachorro)
// console.log (cachorrosPoodle)
// console.log ("Você ganhou um cupom de desconto de 10% para tosar:")


//2)

// const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
//  ]

 //A)

//  const pegarNomeProdutos = (itens) =>{
     
//     return itens.nome
//  }

//  const nomeProdutos = produtos.map(pegarNomeProdutos)
//  console.log (nomeProdutos)

//B) 

// const nomePrecosAlterados = (elementos) => {

//     return {
//         nome: elementos.nome,
//         preco:  elementos.preco - (elementos.preco * 5/100)   }

// }

//     const novosPrecos = produtos.map(nomePrecosAlterados)
//     console.log (novosPrecos)



//C)

// const nomeBebidas = (elementos) =>{
//      return elementos.categoria === "Bebidas"
     
    
// }

// const listaBebidas = produtos.filter(nomeBebidas)
// console.log (listaBebidas)

// D)

// const nomeBebidas = (elementos) =>{
//      return elementos.nome.includes() === "Ypê"
     
    
// }

// const listaBebidas = produtos.filter(nomeBebidas)
// console.log (listaBebidas)