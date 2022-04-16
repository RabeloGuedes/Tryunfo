import React from 'react';
import PropTypes from 'prop-types';

class Search extends React.Component {
  render() {
    const {
      inputFilter,
      filterInputChange,
      selectFilter,
      filterSelectChange,
      superTrunfoFunc,
      disabled,
    } = this.props;
    return (
      <div>
        <h2>Filtros de busca</h2>
        <label htmlFor="Search">
          Buscar carta por Nome
          <input
            name="Search"
            type="text"
            value={ inputFilter }
            onChange={ filterInputChange }
            data-testid="name-filter"
            disabled={ disabled }
          />
        </label>
        <select
          name="Rarity Search"
          data-testid="rare-filter"
          value={ selectFilter }
          onChange={ filterSelectChange }
          disabled={ disabled }
        >
          <option>
            todas
          </option>
          <option>
            normal
          </option>
          <option>
            raro
          </option>
          <option>
            muito raro
          </option>
        </select>
        <label htmlFor="SuperTrunfo">
          Super Trunfo
          <input
            type="checkbox"
            data-testid="trunfo-filter"
            onChange={ superTrunfoFunc }
          />
        </label>
      </div>
    );
  }
}

Search.propTypes = {
  inputFilter: PropTypes.string.isRequired,
  filterInputChange: PropTypes.func.isRequired,
  selectFilter: PropTypes.string.isRequired,
  filterSelectChange: PropTypes.func.isRequired,
  superTrunfoFunc: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default Search;
