import { clipboard } from 'electron';
import React, { Component } from 'react';

export default class App extends Component {

  copyText = () => {
    clipboard.writeText('test');
  }

  render() {
    return (
      <div>
        <h2>Temple</h2>
        <button type="button" onClick={this.copyText}>
          Copy stuff
        </button>
      </div>
    );
  }

}
