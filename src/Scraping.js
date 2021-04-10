import React from 'react';

class Scraping extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputNumber: 0,
      randomNumber: 0,
      bonusCount: 0,
    }
  }

  handleNumberChange() {
    let ran = Math.floor( Math.random() * 6 ) ;
    this.setState({
      inputNumber: this.state.inputNumber + 1,
      randomNumber: ran,
    });
  }

  render(){
    let goGo;
    if(this.state.randomNumber === 5) {
      goGo = (
        <img src="https://pbs.twimg.com/profile_images/880395765461299200/5I_JcQnl.jpg"></img>
      )
    } else {
      goGo = (
        <img src="https://juggler-tengoku.com/wp-content/uploads/2020/04/%E5%85%88CHANCE%E5%91%8A%E7%9F%A51.jpg"></img>
      )
    }
    return(
      <div>
        <button onClick={() => this.handleNumberChange()}>プラス</button>
        <p>ゲーム数: {this.state.inputNumber}</p>
        <p>ボーナス回数: {this.state.bonusCount}</p>
        {goGo}
      </div>
    )
  }
}

export default Scraping;