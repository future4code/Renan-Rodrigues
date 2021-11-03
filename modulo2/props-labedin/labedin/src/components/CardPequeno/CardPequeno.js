import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="pequenocard-container">
            
            <div>
                <h4>{ props.ContatoEmail }</h4>
                <p>{ props.endereco }</p>
            </div>
        </div>
    )
}

export default CardPequeno;