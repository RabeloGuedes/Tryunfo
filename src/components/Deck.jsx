import React from 'react';
import PropTypes from 'prop-types';

class AllCards extends React.Component {
  render() {
    const { deck } = this.props;
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
                ? <span data-testid="trunfo-card"> Super Trunfo </span> : ''
            }
          </div>)) }
      </div>
    );
  }
}

AllCards.propTypes = {
  deck: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default AllCards;
