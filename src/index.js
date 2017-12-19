'use strict';
import { h, Component, render } from 'preact'; /** @jsx h */
import Router from '_/components/router/index.js';
import Base from '_/pages/base/index.js';
import Home from '_/pages/home/index.js';

class IWenKu extends Component {
  
  render() {
    return <Base>
      <Router>
        <Home path='/' />
      </Router>
    </Base>
  }
}


render(<IWenKu />, document.body);