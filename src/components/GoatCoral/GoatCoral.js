import React from 'react';
import './GoatCoral.scss';
import Goat from '../Goat/Goat';

class GoatCoral extends React.Component {
  render() {
    const { goats } = this.props;
    console.error('goats?', this.props.goats);
    const makeGoats = goats.map((goat) => (
      <Goat goat={goat}/>
    ));

    return (
      <div className="GoatCoral d-flex flex-wrap">
        {makeGoats}
      </div>
    );
  }
}

export default GoatCoral;
