// import React from 'react';
import '../css/Card.scss'

function Card(props) {
  const styles = {
    borderTop: `4px solid ${props.card.color}`,
  }

  return (
    <div className="card-box _card-padding" style={ styles }>
      <h2 className="title _card-title-margin-bottom">{ props.card.title }</h2>
      <p className="description">{ props.card.description }</p>
      <img className="icon" src={ props.card.icon } alt={props.card.altText} />
    </div>
  )
}

export default Card;