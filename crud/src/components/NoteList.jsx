import React, { Fragment } from 'react'
import { Button, Image, List, Header, Icon } from 'semantic-ui-react'

const NoteList = () => (
    <Fragment>
        <Header as='h1'>
            <Icon name='sticky note' />
            <Header.Content>All Notes</Header.Content>
        </Header>
        <List divided verticalAlign='middle'>
            <List.Item>
                <List.Content floated='right'>
                    <Button>Expand</Button>
                </List.Content>
                <Image avatar src='/images/avatar/small/lena.png' />
                <List.Content>Lena</List.Content>
            </List.Item>
            <List.Item>
                <List.Content floated='right'>
                    <Button>Expand</Button>
                </List.Content>
                <Image avatar src='/images/avatar/small/lindsay.png' />
                <List.Content>Lindsay</List.Content>
            </List.Item>
            <List.Item>
                <List.Content floated='right'>
                    <Button>Expand</Button>
                </List.Content>
                <Image avatar src='/images/avatar/small/mark.png' />
                <List.Content>Mark</List.Content>
            </List.Item>
            <List.Item>
                <List.Content floated='right'>
                    <Button>Expand</Button>
                </List.Content>
                <Image avatar src='/images/avatar/small/molly.png' />
                <List.Content>Molly</List.Content>
            </List.Item>
        </List>
    </Fragment>
)

export default NoteList