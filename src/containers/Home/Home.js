import React, { Component } from 'react';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';

import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="main">
          <Heading>
            Xbox Clip-izzle
          </Heading>
          <Paragraph size='medium'>
            Search Gamertag, find clips, share easy.
          </Paragraph>
        </div>
      </div>
    );
  }
}

export default Home;
