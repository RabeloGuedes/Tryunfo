import React from 'react';
import PropTypes from 'prop-types';
import './Search.css';
import './Form.css';

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
      <section>
        <h2>Filtros de busca</h2>
        <fieldset className='card-name-container'>
          <legend>Buscar carta por Nome</legend>
          <input
            name="Search"
            type="text"
            value={ inputFilter }
            onChange={ filterInputChange }
            data-testid="name-filter"
            disabled={ disabled }
          />
        </fieldset>
        <section className='rarity-container'>
          <fieldset>
            <legend>Raridade</legend>
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
          </fieldset>
          <section className='save-container'>
            <label htmlFor="SuperTrunfo">
              <input
                type="checkbox"
                data-testid="trunfo-filter"
                onChange={ superTrunfoFunc }
              />
              Super Trunfo
            </label>
          </section>
        </section>
      </section>
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
