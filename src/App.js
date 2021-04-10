import React from 'react';
import Scraping from './Scraping';
import {Welcome} from './Function';
import {State} from './State';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: "kawamoto"
    };
  }
  render(){
    return (
      <div>
        <h1>Hello World {this.state.name}</h1>
        <Scraping/>
        <Welcome
          name="川本"
          age="32"
        />
        <State
          name="劇団ひとり"
        />
      </div>
    );
  }
};

export default App;