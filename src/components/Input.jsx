import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { type, name, dataTest } = this.props;
    if (type === 'select') {
      console.log(dataTest);
      return (
        <label htmlFor={ name }>
          { name }
          <select data-testid={ dataTest } type="select">
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
      );
    } if (type === 'button') {
      return (
        <button data-testid={ dataTest } type="button">
          Salvar
        </button>
      );
    }
    return (
      <label htmlFor={ name }>
        { name }
        <input data-testid={ dataTest } type={ type } />
      </label>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  dataTest: PropTypes.string.isRequired,
};

export default Input;
