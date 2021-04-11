import React from 'react';
import Scraping from './Scraping';
import {Welcome} from './Function';
import {State} from './State';
import {Effect} from './Effect';

class App extends React.Component{
  render(){
    return (
      <div>
        <h1>Hello World</h1>
        <Effect/>

      </div>
    );
  }
};

export default App;