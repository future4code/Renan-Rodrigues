import React from 'react'
import styled from "styled-components"

const IconeContainer = styled.div`
	display: flex;

	img {
		margin-right: 5px;
	}
`

function IconeComContador(props) {
	return <IconeContainer>
		<img alt={'Icone'} src={props.Icone} onClick={props.onClickIcone}/>
		<p>{props.valorContador}</p>
		
		{/* {props.numeroCurtida}
		{props.numeroComentario} */}
	</IconeContainer>
}

export default IconeComContador