import React from "react";

import "./Ticker.css";

export default class Ticker extends React.Component {
    state = {
        value: 0
    };

  constructor(props) {
    super(props);
    fetch(`http://core.wookielabs.com:7002/ticker/${props.pair}`)
      .then(r => r.json())
      .then(res => {
          this.setState({
              value: res.last
          });
      });
  }

  render() {
    const { pair } = this.props;
    return (
      <div className="ticker">
        <p>{pair.toUpperCase().replace("_", " to ")}</p>
        <p>{this.state.value}</p>
      </div>
    );
  }
}

// export default function Ticker({pair}) {
//     return (
//     <div className='ticker'>
//         <p>{pair.toUpperCase().replace('_', ' to ')}</p>
//         <p>12 000</p>
//     </div>);
// }
