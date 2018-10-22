import { clipboard } from 'electron';
import React, { Component } from 'react';
import { Typography, Button } from '@material-ui/core';

class App extends Component {

  copyText = () => {
    clipboard.writeText('test');
  }

  render() {
    return (
      <div>
        <Typography variant="title">Temple</Typography>
        <Button
          onClick={this.copyText}
        >
          Copy stuff
        </Button>
      </div>
    );
  }

}

export default App;
