import React from 'react';
import './GoatCoral.scss';
import Goat from '../Goat/Goat';

class GoatCoral extends React.Component {
  render() {
    const { goats, useAGoat, freeAGoat } = this.props;
    console.error('goats?', this.props.goats);
    const makeGoats = goats.map((goat) => (
      <Goat key={goat.id} goat={goat} useAGoat={useAGoat} freeAGoat={freeAGoat}/>
    ));

    return (
      <div className="GoatCoral d-flex flex-wrap">
        {makeGoats}
      </div>
    );
  }
}

export default GoatCoral;
