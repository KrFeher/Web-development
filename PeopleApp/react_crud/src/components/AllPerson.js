import React, { Component } from 'react';
import { Card, Checkbox } from 'semantic-ui-react';
import PersonCard from './PersonCard';
import InvisiblePersonCard from './InvisiblePersonCard';
import { getAllPeople, deletePerson, togglePersonVisibility, getHiddenPeople } from '../actions';
import { connect } from 'react-redux';

class AllPerson extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showHidden: false,
    }
  }

  componentDidMount() {
    this.props.getPeople();
    this.props.getHiddenPeople();
  }

  onHide = (event, id) => {
    this.props.toggleVisibility(id);
  }

  onEdit = (event, { id, fullname, age, balance, email, address }) => {
    this.props.switchToEdit({ id, fullname, age, balance, email, address });
  }

  showHidePeople = (event, data) => {
    this.setState({ showHidden: data.checked })
  }

  render() {
    let visiblePersonsList = [...this.props.peopleList];
    let invisiblePersonsList = [];
    this.props.hiddenPeopleList.forEach(id => {
      const element = visiblePersonsList.find(person => person.id === id);
      if (element) {
        const index = visiblePersonsList.indexOf(element);
        visiblePersonsList.splice(index, 1);
        invisiblePersonsList.push(element);
      }
    });

    return (
      <div>
        <Checkbox label='Show hidden people' style={{ marginBottom: 20 }} onChange={(event, data) => this.showHidePeople(event, data)}></Checkbox>
        <Card.Group>
          {visiblePersonsList && visiblePersonsList.map(person => {
            return (
              <PersonCard
                key={person.id}
                id={person.id}
                fullname={person.fullname}
                age={person.age}
                balance={person.balance}
                email={person.email}
                address={person.address}
                onDelete={this.props.onDeletePerson}
                onHide={this.onHide}
                onEdit={this.onEdit}
              />)
          })}
          {invisiblePersonsList && this.state.showHidden && invisiblePersonsList.map(person => {
            return (
              <InvisiblePersonCard
                key={person.id}
                id={person.id}
                fullname={person.fullname}
                onHide={this.onHide}
              />)
          })}
        </Card.Group>
      </div>
    )
  };
}

const mapStateToProps = state => {
  return {
    peopleList: state.people,
    hiddenPeopleList: state.hiddenPeople,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getPeople: () => dispatch(getAllPeople()),
    getHiddenPeople: () => dispatch(getHiddenPeople()),
    onDeletePerson: (event, id) => dispatch(deletePerson(id)),
    toggleVisibility: (id) => dispatch(togglePersonVisibility(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllPerson);
