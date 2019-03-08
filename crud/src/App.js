import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'
import MobileMenu from './components/MobileMenu';
import NoteList from './components/NoteList';
import { Route, Switch } from "react-router-dom";
import NoteCalendar from './components/NoteCalendar';
import AddNote from './components/AddNote';
import NoMatch from './components/NoMatch';


class App extends Component {
  render() {
    return (
      <Grid centered columns={1}>
        <Grid.Column computer={12} tablet={12} phone={16}>
          <Switch>
            <Route exact path="/" component={NoteList} />
            <Route path="/calendar" component={NoteCalendar} />
            <Route path="/add" component={AddNote} />
            <Route component={NoMatch} />
          </Switch>
        <MobileMenu />
        </Grid.Column>
      </Grid>
    );
  }
}

export default App;
