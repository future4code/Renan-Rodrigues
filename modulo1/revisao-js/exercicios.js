// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    
    return array.length
   
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {

    return array.sort(function (a, b){
        return a - b
    })
  
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    
    const numeroPar = array.filter ((elemento) =>{
        return elemento % 2 ===0
    })
    
    
    return numeroPar
    
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    
    const numeroPar = array.filter ((elemento) =>{
        return elemento % 2 ===0
    })
    
    
    return (numeroPar**2)
    
 
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  
     let maior = 0

    for (let i = 0; i < array.length; i++){
    if (array[i] > maior) {
        maior = array [i];
       }
    }

    return maior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

    return {
        maiorNumero:num1,
        maiorDivisivelPorMenor: (num2 % num1) ===0,
        diferenca: num2-num1,
    }

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
    const filme = {
        nome: 'O Diabo Veste Prada',
        ano: 2006,
        diretor: 'David Frankel',
        atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']

    }

    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores}`
     
    
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
    const informacoes = {
    nome: "Astrodev",
	idade: 25,
	email: "astrodev@labenu.com.br",
	endereco: "Rua do Futuro, 4"
    }

    const novasInformacoes = {
       
        ...pessoa,
        nome:"ANÔNIMO",
        
    }

    return novasInformacoes
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {

     array = [
        { nome: "Paula", idade: 12, altura: 1.8},
        { nome: "João", idade: 20, altura: 1.3},
        { nome: "Pedro", idade: 15, altura: 1.9},
        { nome: "Luciano", idade: 22, altura: 1.8},
        { nome: "Artur", idade: 10, altura: 1.2},
        { nome: "Soter", idade: 70, altura: 1.9}
    ]

    
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}