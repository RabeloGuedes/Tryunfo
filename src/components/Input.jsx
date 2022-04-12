import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { name, type, label, dataTest, value, func } = this.props;
    return (
      <label htmlFor={ name }>
        { label }
        <input
          name={ name }
          data-testid={ dataTest }
          type={ type }
          value={ value }
          onChange={ func }
        />
      </label>
    );
  }
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  dataTest: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
};

export default Input;
