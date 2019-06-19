import React, { Component } from 'react';
import { Header, Segment, Tab } from 'semantic-ui-react';
import AllPerson from './AllPerson';
import AddPerson from './AddPerson';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activeTab: 0,
      editPerson: '',
    }
  }

  panes = [
    {
      menuItem: 'All person', render: () =>
        <Tab.Pane attached={false}>
          <AllPerson switchToEdit={this.switchToEdit} />
        </Tab.Pane>
    },
    {
      menuItem: 'Add/Edit a person', render: () =>
        <Tab.Pane attached={false}>
          <AddPerson editDetails={this.state.editPerson} onSubmit={this.props.onAddPerson}
          />
        </Tab.Pane>
    },
  ]

  switchToEdit = (person) => {
    this.setState(
      {
        activeTab: 1,
        editPerson: person,
      })
  }

  handleTabChange = (e, { activeIndex }) => {
    if (activeIndex === 1) {
      this.setState(
        {
          editPerson: null,
        })
    }
    this.setState({ activeTab: activeIndex })
  }

  render() {
    return (
      <div>
        <Segment>
          <Header as='h1'>People in Flexera</Header>
        </Segment>
        <Segment>
          <Tab
            activeIndex={this.state.activeTab}
            menu={{ attached: false, tabular: false }}
            panes={this.panes}
            onTabChange={this.handleTabChange}
          />
        </Segment>
      </div>
    )
  };
};

export default (App);
