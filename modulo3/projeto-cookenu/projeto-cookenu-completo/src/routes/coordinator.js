
// passando o 'history' como parâmetro, pois está em outro componente..

export const goToLogin = (history) =>{
    history.push ("/login")


}

export const goToSignUp = (history) =>{
    history.push ("/cadastro")


}

export const goToAddRecipes = (history) =>{
    history.push ("/adicionar-receita")


}

export const goToRecipeDetail = (history, id) =>{
    history.push (`/detalhe/${id}`)


}

//Esse aqui é a minha Home do site... é o feed das receitas....
export const goToRecipesList = (history) =>{
    history.push ("/")


}

