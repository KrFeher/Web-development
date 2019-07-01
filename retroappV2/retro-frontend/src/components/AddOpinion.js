import React, { Component, Fragment } from 'react';
import { Form, List, Button, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { addOpinions } from '../actions';
import uuid from 'uuid';

class AddOpinions extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: '',
      isImprovement: false,
      recommendation: '',
      allOpinions: [],
    }
  }

  handleChange = (e, element) => {
    if (element.checkbox === true) {
      this.setState({ [element.name]: element.checked })
    } else {
      this.setState({ [element.name]: element.value })
    }
  }

  handleSubmit = () => {
    const { text, isImprovement, recommendation } = this.state;
    this.state.allOpinions.push({ key: uuid.v1(), text, isImprovement: isImprovement, recommendation })

    this.setState({
      text: '',
      recommendation: '',
    })
  }

  removeOpinion = (key) => {
    const opinionsList = [...this.state.allOpinions];
    const index = opinionsList.findIndex(opinion => opinion.key === key);
    opinionsList.splice(index, 1);
    this.setState({ allOpinions: opinionsList })
  }


  render() {
    const { text, isImprovement, recommendation } = this.state

    return (
      <Fragment>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <Form.Input
              label='Opinion'
              name='text'
              value={text}
              placeholder='i.e. Standups could be shorter'
              type='text'
              required
              onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <Form.Checkbox
              label='Is this an improvement?'
              name='isImprovement'
              checked={isImprovement}
              required
              onChange={this.handleChange}
              type='checkbox'
              fitted
              toggle
              checkbox />
          </Form.Field>
          <Form.Field hidden={!isImprovement}>
            <Form.Input
              label='Recommended improvement'
              name='recommendation'
              value={recommendation}
              placeholder='i.e. Speak less on standups'
              type='text'
              onChange={this.handleChange} />
          </Form.Field>
          <Form.Button content='Submit'>Add</Form.Button>
        </Form>
        <List>
          {this.state.allOpinions.map(opinion => {
            return (
              <List.Item key={opinion.key}>
                <List.Content floated='right'>
                  <Button color='red' onClick={() => this.removeOpinion(opinion.key)}>Remove</Button>
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
          {this.state.allOpinions.length > 0
            ? <Button
              primary icon labelPosition='right'
              onClick={()=> this.props.onAddOpinions(this.state.allOpinions)}>
              {'Go to Summary Page'}
              <Icon name='right arrow' />
            </Button>
            : null}
        </List>
      </Fragment>
    )
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onAddOpinions: (opinions) => dispatch(addOpinions(opinions)),
  }
}

export default connect(null, mapDispatchToProps)(AddOpinions);
