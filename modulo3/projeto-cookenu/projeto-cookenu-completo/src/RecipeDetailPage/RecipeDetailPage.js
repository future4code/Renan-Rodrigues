import React from "react"
import useProtectedPage from "../hooks/useProtectedPage";
import { useParams } from "react-router-dom";
import useRequestData from "../hooks/useRequestData";
import { ScreenContainer, RecipeImage, RecipeContainer } from "./styled"
import Typography from '@material-ui/core/Typography';
import Loading from "../components/Loading/Loading";


const RecipeDetailPage = () =>{
    useProtectedPage ()
    const params = useParams ()
    const recipe = useRequestData ([],`https://cookenu-api.herokuapp.com/recipe/${params.id}` ) [0]
 


    return (
        <ScreenContainer>
        {recipe ?
            <RecipeContainer>
                 <Typography gutterBottom align={'center'} variant={'h4'} color={'primary'}>{recipe.title}</Typography>
                <RecipeImage src={recipe.image} />
                <Typography gutterBottom align={'justify'} variant={'h5'} color={'primary'}>{"Modo de preparo:"}</Typography>
                <Typography align={'justify'} variant={'h7'} >{recipe.description}</Typography> 

            </RecipeContainer> 
        :
             <Loading/> 
            }
    </ScreenContainer>

    )


}

export default RecipeDetailPage;