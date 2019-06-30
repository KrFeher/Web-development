import React, { Component, Fragment } from 'react';
import { Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { addOpinion, updateOpinion } from '../actions';

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
    debugger;
    if (element.checkbox === true) {
      this.setState({ [element.name]: element.checked })
    } else {
      this.setState({ [element.name]: element.value })
    }
  }

  handleSubmit = () => {
    const { text, isImprovement, recommendation } = this.state;
    debugger;
    this.state.allOpinions.push({ text, isImprovement: isImprovement, recommendation })

    this.setState({
      text: '',
      recommendation: '',
    })
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
      </Fragment>
    )
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onAddOpinion: (opinion) => dispatch(addOpinion(opinion)),
    updateOpinion: (opinion) => dispatch(updateOpinion(opinion)),
  }
}

export default connect(null, mapDispatchToProps)(AddOpinions);
