import React from 'react';
import PropTypes from 'prop-types';

class Search extends React.Component {
  render() {
    const { value, func } = this.props;
    return (
      <div>
        <label htmlFor="Search">
          Buscar carta por Nome
          <input
            name="Search"
            type="text"
            value={ value }
            onChange={ func }
            data-testid="name-filter"
          />
        </label>
      </div>
    );
  }
}

Search.propTypes = {
  value: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
};

export default Search;
