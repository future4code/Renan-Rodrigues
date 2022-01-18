import React from "react"
import  Button  from "@material-ui/core/Button";
import { createMuiTheme } from "@material-ui/core";
import useProtectedPage from "../hooks/useProtectedPage"
import useRequestData from "../hooks/useRequestData"
import RecipeCard from "../RecipeCard/RecipeCard";
import { RecipeListContainer, AddRecipeButton } from "./styled";
import {Add} from "@material-ui/icons"
import { useHistory } from "react-router-dom"
import { goToAddRecipes, goToRecipeDetail } from "../routes/coordinator";
import Loading from "../components/Loading/Loading";

const RecipeListPage = () =>{
    useProtectedPage()
    const history = useHistory()

    const recipes = useRequestData ([], "https://cookenu-api.herokuapp.com/recipe/feed")
    
    const onClickCard = (id) => {
        goToRecipeDetail (history, id)

    }

    const recipeCards = recipes.map ((recipe)=>{
        return (
            <RecipeCard
            key = {recipe.recipe_id}
            title = {recipe.title}
            image = {recipe.image}
            onClick = {() => onClickCard (recipe.recipe_id)}
            />

        )

    })

    return (
        <RecipeListContainer>
            
        {recipeCards.length > 0 ? recipeCards : <Loading/>}
        <AddRecipeButton
        color = {"primary"}
        onClick = {()=> goToAddRecipes(history)}
        >
            <Add />
        </AddRecipeButton>

        </RecipeListContainer>

    )


}

export default RecipeListPage;

