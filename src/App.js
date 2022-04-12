import React from 'react';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.state = {
      Name: '',
      Description: ' ',
      Attribute1: 0,
      Attribute2: 0,
      Attribute3: 0,
      Image: ' ',
      Rarity: ' ',
      SuperTrunfo: false,
      hasTrunfo: false,
      ButtonState: true,
    };
  }

  onInputChange = ({ target }) => {
    const key = target.name;
    const inputValue = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState(
      () => ({ [key]: inputValue }),
    );
  }

  onSaveButtonClick = () => {
    console.log('aqui');
  };

  render() {
    const {
      Name,
      Description,
      Attribute1,
      Attribute2,
      Attribute3,
      Image,
      Rarity,
      SuperTrunfo,
      hasTrunfo,
      ButtonState,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ Name }
          cardDescription={ Description }
          cardAttr1={ Attribute1 }
          cardAttr2={ Attribute2 }
          cardAttr3={ Attribute3 }
          cardImage={ Image }
          cardRare={ Rarity }
          cardTrunfo={ SuperTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ ButtonState }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
      </div>
    );
  }
}

export default App;
