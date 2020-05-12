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

  render() {
    // inside the render - anything we need to do to modify the UI
    const { goats } = this.state;
    return (
    <div className="App">
      <h1>GOAT YOGA LTD</h1>
      <GoatCoral goats={goats}/>
    </div>
    );
  }
}

export default App;
