import React from 'react';
import './App.scss';

import goatData from '../helpers/data/goatData';
import GoatCoral from '../components/GoatCoral/GoatCoral';

class App extends React.Component {
  state = {
    goats: [],
  }

  // outside render - anything that midfies state

  componentDidMount() {
    const goats = goatData.getGoats();
    // goatBuilder(goats);
    this.setState({ goats });
  }

  useAGoat = (goatId) => {
    goatData.useGoat(goatId);
    const goats = goatData.getGoats();
    this.setState({ goats });
  };

  freeAGoat = (goatId) => {
    goatData.freeGoat(goatId);
    const goats = goatData.getGoats();
    this.setState({ goats });
  };

  render() {
    // inside the render - anything we need to do to modify the UI
    const { goats } = this.state;
    return (
    <div className="App">
      <h1>GOAT YOGA LTD</h1>
      <GoatCoral goats={goats} useAGoat={this.useAGoat} freeAGoat={this.freeAGoat}/>
    </div>
    );
  }
}

export default App;
