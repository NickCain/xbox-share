import lennox from 'lennox'
import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import Box from 'grommet/components/Box';
import Form from 'grommet/components/Form';
import SearchInput from 'grommet/components/SearchInput';
import Button from 'grommet/components/Button';

import './GamerTagSearch.css';

const xboxApi = lennox('fed36b042323d8d94c4204d25af3574aa5adae7b');


class GamerTagSearch extends Component {

  constructor(props) {
    super(props);

    this.state = {
      gamerTag: ''
    };
  }

  handleGamerTagSearch = (e) => {
    this.setState({
      gamerTag: e.target.value
    });
  };

  handleSubmitSearchForGamerTag = (e) => {
    xboxApi.getUserIdByGamertag(this.state.gamerTag).then(value => {
      this.props.gamerTagID(this.state.gamerTag, value.data.xuid)
    });

  };


  render() {
    return (
      <Box flex={true}
           direction='row'
           responsive={false}>
        <Form>
          <SearchInput
            placeHolder='Search GamerTag'
            onDOMChange={this.handleGamerTagSearch}
          />
          <Link to="/clips">
            <Button
              label='Submit'
              type='submit'
              primary={true}
              onClick={this.handleSubmitSearchForGamerTag}
            />
          </Link>
        </Form>
      </Box>
    );
  }
}

export default GamerTagSearch;
