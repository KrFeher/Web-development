import React, { Component, Fragment } from 'react';
import { Icon, List, Button } from 'semantic-ui-react';
import { getAllOpinion } from '../actions';
import { connect } from 'react-redux';

class AllOpinions extends Component {
  componentDidMount() {
    this.props.getOpinions();
  }

  render() {
    const opinions = this.props.opinionList;
    return (
      <Fragment>
        <Button circular icon='refresh' onClick={this.props.getOpinions} />
        <List>
          {opinions.map(opinion => {
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

const mapStateToProps = state => {
  return {
    opinionList: state.opinions,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getOpinions: () => dispatch(getAllOpinion()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllOpinions);
