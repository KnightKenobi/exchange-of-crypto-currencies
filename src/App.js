import React, { Component } from "react";
import "./App.css";
import Ticker from './Ticker/Ticker';

import currencies from "./currencies";

class App extends Component {
  state = {
    selectedPairs: []
  };

  changeCheckbox = curr => event => {
    const { checked } = event.target;
    this.setState(({ selectedPairs }) => {
      let pairs = [...selectedPairs];

      if (checked) {
        pairs.push(curr);
      } else {
        pairs = pairs.filter(pair => pair !== currencies);
      }

      return {
        selectedPairs: pairs
      };
    });
  };

  render() {
    return (
      <div className="app">
        <aside>
          <ul className="currList">
            {currencies.map(curr => (
              <li key={curr} className="currItem">
                <input
                  type="checkbox"
                  id={curr}
                  onChange={this.changeCheckbox(curr)}
                />
                <label>{curr.toUpperCase()}</label>
              </li>
            ))}
          </ul>
        </aside>
        <main>
          {this.state.selectedPairs.map(pair => (
            <Ticker key={pair} pair={pair} />
          ))}
        </main>
      </div>
    );
  }
}

export default App;
