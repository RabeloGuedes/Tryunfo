import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import './Form.css';

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
    return (
      <form>
        <section className='inputs-container'>
          <div>
            <Input
              name="Name"
              type="text"
              label="Nome da carta"
              dataTest="name-input"
              value={ cardName }
              func={ onInputChange }
            />
          </div>
          <div>
            <Input
              name="Description"
              type="textarea"
              label="Descrição da Carta"
              dataTest="description-input"
              value={ cardDescription }
              func={ onInputChange }
            />
          </div>
          <div>
            <Input
              name="Attribute1"
              type="number"
              label="Primeiro Atributo"
              dataTest="attr1-input"
              value={ cardAttr1 }
              func={ onInputChange }
            />
          </div>
          <div>
            <Input
              name="Attribute2"
              type="number"
              label="Segundo Atributo"
              dataTest="attr2-input"
              value={ cardAttr2 }
              func={ onInputChange }
            />
          </div>
          <div>
            <Input
              name="Attribute3"
              type="number"
              label="Terceiro Atributo"
              dataTest="attr3-input"
              value={ cardAttr3 }
              func={ onInputChange }
            />
          </div>
          <div>
            <Input
              name="Image"
              type="text"
              label="Caminho até a imagem"
              dataTest="image-input"
              value={ cardImage }
              func={ onInputChange }
            />
          </div>
        </section>
        <section className='rarity-container'>
          <fieldset htmlFor="Rarity">
            <legend>Raridade</legend>
            <select
              name="Rarity"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="" hidden>----</option>
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </fieldset>
        </section>
        <section className='save-container'>
          <div>
            {
              !hasTrunfo ? (
                <label htmlFor="SuperTrunfo">
                  <input
                    name="SuperTrunfo"
                    type="checkbox"
                    label="Super Trunfo ?"
                    data-testid="trunfo-input"
                    checked={ cardTrunfo }
                    onChange={ onInputChange }
                  />
                  Super Trunfo
                </label>) : <p>Você já tem um Super Trunfo em seu baralho</p>
            }
          </div>
          <div>
            <button
              data-testid="save-button"
              type="button"
              disabled={ isSaveButtonDisabled }
              onClick={ onSaveButtonClick }
              style={{ backgroundColor: isSaveButtonDisabled ? '#C08A6A' : '#63BAAB' , color: '#FFE8D1' }}
            >
              Salvar
            </button>
          </div>
        </section>
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
