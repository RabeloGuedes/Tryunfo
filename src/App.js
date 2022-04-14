import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.state = {
      Name: '',
      Description: ' ',
      Attribute1: '',
      Attribute2: '',
      Attribute3: '',
      Image: '',
      Rarity: '',
      SuperTrunfo: '',
      hasTrunfo: false,
      ButtonState: true,
      Deck: [],
    };
  }

  onInputChange = ({ target }) => {
    const key = target.name;
    const inputValue = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState(
      () => ({ [key]: inputValue }),
      () => this.verifier(),
    );
  }

  verifier = () => {
    const highestPoints = 90;
    const highestTotalPoints = 210;
    const {
      Name,
      Description,
      Attribute1,
      Attribute2,
      Attribute3,
      Image,
      Rarity,
    } = this.state;
    if (Name.length === 0
      || Description.length === 0
      || (Attribute1 > highestPoints || Attribute1 < 0)
      || (Attribute2 > highestPoints || Attribute2 < 0)
      || (Attribute3 > highestPoints || Attribute3 < 0)
      || (Number(Attribute1)
      + Number(Attribute2)
      + Number(Attribute3)
      > highestTotalPoints)
      || Image.length === 0
      || (Rarity.length === 0)
    ) {
      this.setState({ ButtonState: true });
    } else {
      this.setState({ ButtonState: false });
    }
  };

  onSaveButtonClick = () => {
    const {
      Deck,
      Name,
      Description,
      Attribute1,
      Attribute2,
      Attribute3,
      Image,
      Rarity,
      SuperTrunfo,
    } = this.state;
    const card = {
      Name,
      Description,
      Attribute1,
      Attribute2,
      Attribute3,
      Image,
      Rarity,
      SuperTrunfo,
    };
    if (card.SuperTrunfo) {
      this.setState({ hasTrunfo: true });
    }
    this.setState(
      () => ({ Deck:
        [...Deck, card],
      Name: '',
      Description: '',
      Attribute1: 0,
      Attribute2: 0,
      Attribute3: 0,
      Image: '',
      Rarity: 'normal',
      }),
    );
  }

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
        <Card
          cardName={ Name }
          cardDescription={ Description }
          cardAttr1={ Attribute1 }
          cardAttr2={ Attribute2 }
          cardAttr3={ Attribute3 }
          cardImage={ Image }
          cardRare={ Rarity }
          cardTrunfo={ SuperTrunfo }
        />
      </div>
    );
  }
}

export default App;
