import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import AllCards from './components/AllCards';
import Search from './components/Search';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.cardRemover = this.cardRemover.bind(this);
    this.filterInputChange = this.filterInputChange.bind(this);
    this.filterSelectChange = this.filterSelectChange.bind(this);
    this.checkboxStatus = this.checkboxStatus.bind(this);
    this.state = {
      Name: '',
      Description: ' ',
      Attribute1: 0,
      Attribute2: 0,
      Attribute3: 0,
      Image: '',
      Rarity: '',
      SuperTrunfo: false,
      hasTrunfo: false,
      ButtonState: true,
      Deck: [],
      Filter: '',
      Select: 'todas',
      BestCardOn: false,
      Disabled: false,
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
      Rarity: '',
      SuperTrunfo: false,
      ButtonState: true,
      }),
    );
  }

  cardRemover = ({ target }) => {
    const { Deck } = this.state;
    const newDeck = Deck.filter(({ Name }) => Name !== target.name);
    this.setState(
      () => ({ Deck: newDeck }),
      () => this.isThereSuperTrunfo(),
    );
  };

  isThereSuperTrunfo = () => {
    const { Deck } = this.state;
    if (!Deck.find(({ SuperTrunfo }) => SuperTrunfo === true)) {
      this.setState({ hasTrunfo: false });
    }
  };

  filterInputChange = ({ target }) => {
    this.setState({ Filter: target.value });
  };

  filterSelectChange = ({ target }) => {
    this.setState({ Select: target.value });
  }

  checkboxStatus = ({ target }) => {
    if (target.checked) {
      this.setState({
        BestCardOn: true,
        Disabled: true,
      });
    } else {
      this.setState({
        BestCardOn: false,
        Disabled: false,
      });
    }
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
      Deck,
      Filter,
      Select,
      BestCardOn,
      Disabled,
    } = this.state;
    return (
      <div>
        <h1 className='tryunfo-title'>Tryunfo</h1>
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
        <Search
          inputFilter={ Filter }
          filterInputChange={ this.filterInputChange }
          selectFilter={ Select }
          filterSelectChange={ this.filterSelectChange }
          superTrunfoFunc={ this.checkboxStatus }
          disabled={ Disabled }
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
        <AllCards
          filterInput={ Filter }
          filterSelect={ Select }
          deck={ Deck }
          func={ this.cardRemover }
          bestCardOn={ BestCardOn }
        />
      </div>
    );
  }
}

export default App;
