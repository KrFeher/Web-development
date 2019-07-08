import React, { Component, Fragment } from 'react';
import { Icon, List } from 'semantic-ui-react';
const io = require('socket.io-client');

class AllOpinions extends Component {
  constructor(props) {
    super(props)

    this.state = {
      opinionList: [],
    }
  }

  componentDidMount() {
    const socket = io('http://localhost:5000');
    socket.on('new-opinions', opinions => {
      const mappedOpinions = opinions.map(opinion => {
        const { improvement, isImprovement, text, _id, createdDate } = opinion;
        return {
          id: _id,
          createdDate,
          recommendation: improvement,
          isImprovement,
          text
        }
      });
      this.setState({ opinionList: mappedOpinions });
    })
  }

  render() {
    const opinions = this.state.opinionList;
    return (
      <Fragment>
        <List>
          {opinions && opinions.map(opinion => {
            return (
              <List.Item key={opinion.id}>
                <List.Content floated='right'>
                </List.Content>
                {opinion.isImprovement
                  ? <Icon name='thumbs down' color='red'></Icon>
                  : <Icon name='thumbs up' color='green'></Icon>}
                <List.Content>
                  <List.Header>{opinion.text}</List.Header>
                  {opinion.recommendation}
                </List.Content>
              </List.Item>
            )
          })}
        </List>
      </Fragment>
    )
  };
}

export default AllOpinions;
