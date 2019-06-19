import React, { Component, Fragment } from 'react';
import { Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { addPerson, updatePerson } from '../actions';

class AddPerson extends Component {
  constructor(props) {
    super(props)

    this.state = this.props.editDetails || {
      id: '',
      fullname: '',
      age: '',
      balance: '',
      email: '',
      address: '',
    }
  }


  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    if (this.state.id) {
      this.props.updatePerson(this.state);
    } else {
      this.props.onAddPerson(this.state);
    }

    this.setState({
      id: '',
      fullname: '',
      age: '',
      balance: '',
      email: '',
      address: '',
    })
  }

  render() {
    const { fullname, age, balance, email, address } = this.state

    return (
      <Fragment>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <Form.Input label='Name' name='fullname' value={fullname} placeholder='i.e. John Doe' type='text' required onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <Form.Input label='Age' name='age' value={age} placeholder='i.e. 32' type='number' required onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <Form.Input label='Balance' name='balance' value={balance} placeholder='i.e. 522' type='number' required onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <Form.Input label='Email' name='email' value={email} placeholder='i.e. john.doe@email.com' type='email' required onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <Form.Input label='Address' name='address' value={address} placeholder='i.e. 42 Example drive, San Francisco' type='text' required onChange={this.handleChange} />
          </Form.Field>
          <Form.Button content='Submit'>Submit</Form.Button>
        </Form>
      </Fragment>
    )
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onAddPerson: (person) => dispatch(addPerson(person)),
    updatePerson: (person) => dispatch(updatePerson(person)),
  }
}

export default connect(null, mapDispatchToProps)(AddPerson);
