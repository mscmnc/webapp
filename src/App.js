import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import WebApp from './container/WebApp/WebApp';

library.add(faArrowRight, faArrowLeft)

class App extends Component {
  render() {
    return (
      <WebApp/>
    );
  }
}

export default App;
