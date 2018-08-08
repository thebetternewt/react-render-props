import React, { Component } from 'react';
import { Card } from 'components/Elements';

class Drag extends Component {
  render() {
    return (
      <Card draggable>
        <h1>Drag</h1>
      </Card>
    );
  }
}

export default Drag;
