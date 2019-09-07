import React, {Component} from 'react';

import KudosInput from './KudosInput';
import KudosList from './KudosList';

class Main extends Component {
  constructor(props, context) {
    super(props);
  }

  render() {
    return (
      <div className="main">
        <div>
          <h1>Kudos-o-Awesome</h1>
          <p>Marketing will love this.</p>
        </div>

        <KudosInput />
        <KudosList />
      </div>
    );
  }
}

export default Main;
