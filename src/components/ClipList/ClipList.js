import React, { Component } from 'react';
import _ from 'lodash';
import MetaTags from 'react-meta-tags';

import Spinning from 'grommet/components/icons/Spinning';
import Card from 'grommet/components/Card';
import Anchor from 'grommet/components/Anchor';
import SingleClip from '../SingleClip/SingleClip';

import styles from './ClipList.css';

class ClipList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showIndivdualVideo: false,
      videoUrl: '',
    }
  }

  componentDidMount() {
    this.props.onGamerTagClipsRequest();
  }

  handleOnCardClick = (videoUrl, thumbnail, gameName, dateRecorded) => {
    this.setState({
      showIndivdualVideo: !this.state.showIndivdualVideo,
      videoUrl,
      thumbnail,
      gameName,
      dateRecorded
    })
  };

  render() {
    const { videoUrl, thumbnail, gameName, dateRecorded } = this.state;

    return (
      <div>
        <MetaTags>
          <title>Page 1</title>
          <meta id="meta-description" name="description" content="Xbox clip-izzle - Share your Xbox clips with the world" />
          <meta id="og-title" property="og:title" content="Xbox clip-izzle" />
          <meta property="og:video" content={videoUrl} />
          <meta id="og-image" property="og:image" content={thumbnail} />
        </MetaTags>
        {
          this.state.showIndivdualVideo ?
            <SingleClip videoUrl={videoUrl} thumbnail={thumbnail} gameName={gameName} dateRecorded={dateRecorded}/>
            :
            !_.isEmpty(this.props.gamerTagClips) ?
              _.map(this.props.gamerTagClips, clip => (
                <Card
                  key={clip.gameClipId}
                  thumbnail={_.head(clip.thumbnails).uri}
                  label={clip.deviceType}
                  heading={clip.titleName}
                  description='Sample description providing more details.'
                  link={
                    <Anchor href='' label='Sample anchor'/>
                  }
                  contentPad='none'
                  onClick={() => {
                    this.handleOnCardClick(
                      _.head(clip.gameClipUris).uri,
                      clip.thumbnails[1].uri,
                      clip.titleName,
                      clip.dateRecorded
                    )
                  }}
                >
                </Card>
              ))
              :
              <Spinning size="xlarge"/>
        }

      </div>
    )
  }
}

export default ClipList;

