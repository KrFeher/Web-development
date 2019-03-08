import React, { Component } from 'react';
import { Header, Icon } from 'semantic-ui-react';

export default class AddNote extends Component {
    render() {
        return (
            <div>
                <Header as='h1'>
                    <Icon name='add' />
                    <Header.Content>Add new Note</Header.Content>
                </Header>
            </div>
        )
    }
}
