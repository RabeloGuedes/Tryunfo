import React from 'react';
import PropTypes from 'prop-types';
import './AllCards.css';

class AllCards extends React.Component {
  render() {
    const { deck, func, filterInput, filterSelect, bestCardOn } = this.props;
    return (
      <section className='deck-container'>
        <h2 className='deck'>
          Deck
        </h2>
        <section className='all-cards-container'>
          { deck.filter(({ Name, Rarity, SuperTrunfo }) => ((filterInput === ''
            || Name.includes(filterInput))
            && (filterSelect === 'todas'
            || filterSelect === Rarity)
            && (SuperTrunfo === bestCardOn || bestCardOn === false))).map(({ Name,
            Description,
            Attribute1,
            Attribute2,
            Attribute3,
            Image,
            Rarity,
            SuperTrunfo,
          }) => (
            <div key={ Name }>
              <h2>
                Nome
                <h4>
                  { Name }
                </h4>
              </h2>
              <img
                src={ Image }
                alt={ Name }
              />
              <p>
                Descrição
                <span className='card-span'>
                  { Description }
                </span>
              </p>
              <p>
                Atributo 1
              <span className='card-span'>
                { Attribute1 }
              </span>
              </p>
              <p>
                Atributo 2
              <span className='card-span'>
                { Attribute2 }
              </span>
              </p>
              <p>
                Atributo 3
              <span className='card-span'>
                { Attribute3 }
              </span>
              </p>
              <p>
                Raridade
              <span className='card-span'>
                { Rarity }
              </span>
              </p>
              {
                (SuperTrunfo)
                  ? <h3 data-testid="trunfo-card"> Super Trunfo </h3> : ''
              }
              <button
                name={ Name }
                type="button"
                data-testid="delete-button"
                onClick={ func }
              >
                Excluir
              </button>
            </div>)) }
        </section>
      </section>
    );
  }
}

AllCards.propTypes = {
  deck: PropTypes.arrayOf(PropTypes.object).isRequired,
  func: PropTypes.func.isRequired,
  filterInput: PropTypes.string.isRequired,
  filterSelect: PropTypes.string.isRequired,
  bestCardOn: PropTypes.bool.isRequired,
};

export default AllCards;
