import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardImage,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
    } = this.props;
    return (
      <section className='card-preview-container'>
        <h2 data-testid="name-card">
          Nome
          <h4>{cardName}</h4>
        </h2>
        <img
          data-testid="image-card"
          src={ cardImage }
          alt={ cardName }
        />
        <p data-testid="description-card">
          Descrição
          <span className='card-preview-span'>
            {cardDescription}
          </span>
        </p>
        <p data-testid="attr1-card">
          Atributo 1
          <span className='card-preview-span'>
            {cardAttr1}
          </span>
        </p>
        <p data-testid="attr2-card">
          Atributo 2
          <span className='card-preview-span'>
            {cardAttr2}
          </span>
        </p>
        <p data-testid="attr3-card">
          Atributo 3
          <span className='card-preview-span'>
            {cardAttr3}
          </span>
        </p>
        <p data-testid="rare-card">
          Raridade
          <span className='card-preview-span'>
            {cardRare}
          </span>
        </p>
        {
          (cardTrunfo)
            ? <h3 data-testid="trunfo-card"> Super Trunfo </h3> : ''
        }
      </section>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
