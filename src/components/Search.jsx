import React from 'react';
import PropTypes from 'prop-types';

class Search extends React.Component {
  render() {
    const {
      inputFilter,
      filterInputChange,
      selectFilter,
      filterSelectChange,
    } = this.props;
    return (
      <div>
        <label htmlFor="Search">
          Buscar carta por Nome
          <input
            name="Search"
            type="text"
            value={ inputFilter }
            onChange={ filterInputChange }
            data-testid="name-filter"
          />
          <select
            name="Rarity Search"
            data-testid="rare-filter"
            value={ selectFilter }
            onChange={ filterSelectChange }
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
};

export default Search;
