import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Pokemon extends Component {
  render() {
    const { pokemon: { name, type, averageWeight, image } } = this.props;
    return (
      <li>
        <div className="card">
          <div>
            <p>{ name }</p>
            <p>{ type }</p>
            <p>{ `${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
          </div>
          <img src={ image } alt={ name } />
        </div>
      </li>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      value: PropTypes.number,
      measurementUnit: PropTypes.string,
    }),
    image: PropTypes.string,
  }).isRequired,
};

export default Pokemon;
