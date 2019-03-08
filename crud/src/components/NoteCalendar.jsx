import React, { Component } from 'react';
import { Header, Icon } from 'semantic-ui-react';

export default class NoteCalendar extends Component {
    render() {
        return (
            <Header as='h1'>
                <Icon name='calendar' />
                <Header.Content>Your Calendar</Header.Content>
            </Header>
        )
    }
}
