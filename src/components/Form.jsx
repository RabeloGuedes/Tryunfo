import React from 'react';
import Input from './Input';
import data from '../data';

class Form extends React.Component {
  render() {
    const { inputTypes, dataTest, name } = data;
    return (
      <form>
        { inputTypes.map((type, index) => (
          <div key={ Math.random() }>
            <Input dataTest={ dataTest[index] } name={ name[index] } type={ type } />
          </div>
        ))}
      </form>
    );
  }
}

export default Form;
