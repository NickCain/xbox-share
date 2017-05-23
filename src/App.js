import lennox from 'lennox'

import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import 'grommet/grommet.min.css';
import './App.css';

import Spinning from 'grommet/components/icons/Spinning';
import Columns from 'grommet/components/Columns';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';
import Home from './containers/Home/Home';
import Clips from './containers/Clips/Clips';

import GamerTagSearch from './components/gamerTagSearch/GamerTagSearch';

const xboxApi = lennox('fed36b042323d8d94c4204d25af3574aa5adae7b');

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      gamerTag: '',
      gamerTagID: '',
      gamerTagClips: {}
    };
  }


  handleGetGamerID = (gamerTag, gamerTagID) => {
    this.setState({
      gamerTag,
      gamerTagID
    })
  };

  gamerTagClips = () => {
    if (this.state.gamerTagID !== '') {
      xboxApi.getGameClipsByUserId(this.state.gamerTagID).then(res => {
        this.setState({
          gamerTagClips: res.data
        });
      });
    }
    return null
  };

  render() {
    return (
      <div className="App">
        <Router>
          <div className="header">
            <Header float={false}
                    fixed={false}
                    splash={false}>
              <Columns size="small">
                <Box flex={true}
                     direction='row'
                     responsive={false}>
                  <Title>
                    <Link to="/">Xbox Clip-izzle</Link>
                  </Title>
                </Box>
                <GamerTagSearch gamerTagID={this.handleGetGamerID}/>
              </Columns>
            </Header>
            <Route exact path="/" component={Home}/>
            <Route path='/clips' render={(props) => (
              this.state.gamerTag !== '' || this.state.gamerTagID !== '' ?
                <Clips
                  onGamerTagClipsRequest={this.gamerTagClips}
                  gamerTagClips={this.state.gamerTagClips}
                  gamerTag={this.state.gamerTag}
                />
                :
                <div className="spinner-wrapper">
                  <Spinning size="xlarge"/>
                </div>
            )}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
