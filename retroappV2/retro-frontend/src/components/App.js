import React, { Component } from 'react';
import { Header, Segment, Tab } from 'semantic-ui-react';
import AllOpinions from './AllOpinions';
import AddOpinions from './AddOpinion';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activeTab: 0,
      editPerson: '',
    }
  }

  render() {
    return (
      <div>
        <Segment>
          <Header as='h1'>Retro App</Header>
        </Segment>
        <Segment>
          <AddOpinions></AddOpinions>
        </Segment>
      </div>
    )
  };
};

export default (App);
