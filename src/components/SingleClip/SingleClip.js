import React, { Component } from 'react';

import Box from 'grommet/components/Box';
import Video from 'grommet/components/Video';

import './SingleClip.css';

class SingleClip extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { videoUrl, thumbnail, gameName, dateRecorded } = this.props;
    console.log(this.props);
    return (
      <div>
        <Box>
          <Video autoPlay={true}
                 title={gameName}
                 poster={thumbnail}
                 full={true}
                 shareLink={videoUrl}
                 shareText={`I created a cool clip on ${gameName}`}>
            <source src={videoUrl} type='video/mp4'/>
          </Video>
        </Box>
      </div>
    );
  }
}


export default SingleClip;
