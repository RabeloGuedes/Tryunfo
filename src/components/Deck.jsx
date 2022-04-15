import React from 'react';
import PropTypes from 'prop-types';

class AllCards extends React.Component {
  render() {
    const { deck, func } = this.props;
    return (
      <div>
        { deck.map(({ Name,
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
              { Name }
            </h2>
            <img
              src={ Image }
              alt={ Name }
            />
            <p>
              { Description }
            </p>
            <p>
              { Attribute1 }
            </p>
            <p>
              { Attribute2 }
            </p>
            <p>
              { Attribute3 }
            </p>
            <p>
              { Rarity }
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
      </div>
    );
  }
}

AllCards.propTypes = {
  deck: PropTypes.arrayOf(PropTypes.object).isRequired,
  func: PropTypes.func.isRequired,
};

export default AllCards;
