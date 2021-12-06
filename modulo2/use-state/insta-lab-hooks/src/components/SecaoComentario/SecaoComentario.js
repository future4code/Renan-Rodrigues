import React, {useState} from 'react'
import styled from "styled-components"

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComment = styled.input `
    width: 100%;
    margin-right: 5px;
`

const SecaoComentario = (props) => {
	const [coments, setComents] = useState("")

	const onChangeComentario = (event) => {
		setComents (event.target.value)
	
		console.log (coments)
	}
	
	return (
		<CommentContainer>
			<InputComment
				className={'input-comentario'}
				placeholder={'Comentário'}
				value={coments}
				onChange={onChangeComentario}
			/>
			<button onClick={() => { props.enviarComentario(coments) }} >Enviar</button>
			

		</CommentContainer>
		
	) 
	
}


export default SecaoComentario