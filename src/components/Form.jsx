import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    console.log(hasTrunfo);
    return (
      <form>
        <div>
          <Input
            type="text"
            label="Nome da carta"
            dataTest="name-input"
            value={ cardName }
            onChange={ onInputChange }
          />
        </div>
        <div>
          <Input
            type="textarea"
            label="Descrição da Carta"
            dataTest="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </div>
        <div>
          <Input
            type="number"
            label="Primeiro Atributo"
            dataTest="attr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </div>
        <div>
          <Input
            type="number"
            label="Segundo Atributo"
            dataTest="attr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </div>
        <div>
          <Input
            type="number"
            label="Terceiro Atributo"
            dataTest="attr3-input"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </div>
        <div>
          <Input
            type="text"
            label="Caminho até a imagem"
            dataTest="image-input"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </div>
        <div>
          <Input
            type="select"
            label="Raridade"
            dataTest="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          />
        </div>
        <div>
          <Input
            type="checkbox"
            label="Super Trunfo ?"
            dataTest="trunfo-input"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
        </div>
        <div>
          <Input
            type="button"
            label="Salvar"
            dataTest="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          />
        </div>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
