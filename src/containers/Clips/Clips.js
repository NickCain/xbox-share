import React, { Component } from 'react';

import Split from 'grommet/components/Split';
import Box from 'grommet/components/Box';

import ClipList from '../../components/ClipList/ClipList';

import './Clips.css';

class Clips extends Component {

  render() {
    return (
      <div className="home">
        <div className="main">
          <Split flex='right'
                 separator={false}
                 showOnResponsive='both'
                 fixed={false}>
            <Box colorIndex='neutral-1'
                 justify='center'
                 align='center'
                 pad='medium'>
              Left Side
            </Box>
            <Box colorIndex='neutral-2'
                 justify='center'
                 align='center'
                 pad='medium'>
              <ClipList
                onGamerTagClipsRequest={this.props.onGamerTagClipsRequest}
                gamerTagClips={this.props.gamerTagClips}
              />
            </Box>
          </Split>
        </div>
      </div>
    );
  }
}

export default Clips;
