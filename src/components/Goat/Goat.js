import React from 'react';

import './Goat.scss';

class Goat extends React.Component {
  render() {
    const { goat } = this.props;
    return (
      <div className="Goat col-3">
        <div class="card">
          <img class="card-img-top goatImg" src={goat.imgUrl} alt="Goat Card"/>
          <div class="card-body">
          <h4>{goat.name}</h4>
          <p class="card-text">Beard Leangth: {goat.beardLength} </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Goat;
