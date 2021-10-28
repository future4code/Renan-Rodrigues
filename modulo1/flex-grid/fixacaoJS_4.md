
```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  
  let repeticoes = 0
  
  for (let i = 0; i <arrayDeNumeros.lenght; i++){
    if (arrayDeNumeros[i] === numeroEscolhido){
      repeticoes++
      return repeticoes
    }
    return repeticoes
  }

```