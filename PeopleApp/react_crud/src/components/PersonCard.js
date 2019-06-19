import React, { Component } from 'react';
import { Card, Button, List } from 'semantic-ui-react';

class PersonCard extends Component {
  render() {
    return (
      <Card>
        <Card.Content>
          <Card.Header>{this.props.fullname || 'N/A'}</Card.Header>
          <Card.Meta>{`Age: ${this.props.age || 'N/A'}`}</Card.Meta>
          <Card.Description>
            <List>
              <List.Item>
                <List.Icon name='dollar' />
                <List.Content>{`Balance(£): ${this.props.balance || 'N/A'}`}</List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name='home' />
                <List.Content>{`Address: ${this.props.address || 'N/A'}`}</List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name='mail' />
                <List.Content>{`Email: ${this.props.email || 'N/A'}`}</List.Content>
              </List.Item>
            </List>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div>
            <Button.Group>
              <Button basic color='grey' onClick={(e) => this.props.onHide(e, this.props.id)}>
                {'Hide'}
              </Button>
              <Button basic color='red' onClick={(e) => this.props.onDelete(e, this.props.id)}>
                {'Remove'}
              </Button>
              <Button basic color='blue' onClick={(e) => this.props.onEdit(e, this.props)}>
                {'Edit'}
              </Button>
            </Button.Group>
          </div>
        </Card.Content>
      </Card>
    )
  };
}

export default PersonCard;
