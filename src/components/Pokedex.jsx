import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pokemon from './Pokemon';

class Pokedex extends Component {
  render() {
    const { pokemonList } = this.props;
    return (
      <div>
        <h1 className="title">Pokédex</h1>
        <ul className="card-container">
          { pokemonList.map((pokemon) => (
            <Pokemon pokemon={ pokemon } key={ pokemon.id } />)) }
        </ul>
      </div>
    );
  }
}

Pokedex.propTypes = {
  pokemonList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      type: PropTypes.string,
      averageWeight: PropTypes.shape({
        value: PropTypes.number,
        measurementUnit: PropTypes.string,
      }),
      image: PropTypes.string,
      moreInfo: PropTypes.string,
    }),
  ),
};

Pokedex.defaultProps = {
  pokemonList: [{
    id: 25,
    name: 'Pikachu',
    type: 'Electric',
    averageWeight: {
      value: 6.0,
      measurementUnit: 'kg',
    },
    image: 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png',
    moreInfo: 'https://bulbapedia.bulbagarden.net/wiki/Pikachu_(Pok%C3%A9mon)',
  }],
};

export default Pokedex;
