import React from "react"

import {Switch, Route } from "react-router-dom"
import AddRecipesPage from "../AddRecipesPage/AddRecipesPage"
import LoginPage from "../LoginPage/LoginPage"
import RecipeDetailPage from "../RecipeDetailPage/RecipeDetailPage"
import RecipeListPage from "../RecipesListPage/RecipesListPage"
import SignUpPage from "../SignUpPage/SignUpPage"
import ErroPage from "../ErroPage/ErroPage"


const Router = ({setRightButtonText}) =>{

    return (
      
       <Switch>

       <Route exact path ="/login">
            <LoginPage setRightButtonText ={setRightButtonText} />
       </Route>

       <Route exact path ="/cadastro">
            <SignUpPage setRightButtonText ={setRightButtonText}/>
       </Route>
       
       //Esse aqui é a minha Home do site... é o feed das receitas....
       <Route exact path ="/">
            <RecipeListPage/>
       </Route>

       <Route exact path ="/adicionar-receita">
            <AddRecipesPage/>
       </Route>

       <Route exact path ="/detalhe/:id">
            <RecipeDetailPage/>
       </Route>
       
       <Route>
            <ErroPage/>
       </Route>
       
       
       </Switch>
       

    )


}

export default Router;