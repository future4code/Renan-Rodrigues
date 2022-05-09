import React from 'react'
import CardBotao from './styled'
import {Button} from './styled'

const CardButton = () =>{
    return (
        <CardBotao onClick={props.onClick}>
        <Button
        key = {loterias.id}
        title = {loterias.nome}
        />
        </CardBotao>

    )

}

export default CardButton;