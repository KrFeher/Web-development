import React from 'react';
import { Card, Button, Icon, Grid } from 'semantic-ui-react';


export default function InvisiblePersonCard(props) {
  return (
    <Card style={{ height: '30%' }}>
      <Card.Content>
        <Grid.Column textAlign='right'>
          <Icon name='eye slash' size='large' color='grey' />
        </Grid.Column>
        <Card.Header style={{ marginTop: '-10%' }}>{props.fullname || 'N/A'}</Card.Header>
        <Button basic color='green' onClick={(e) => props.onHide(e, props.id)}>
          {'Show'}
        </Button>
      </Card.Content>
    </Card>
  )
}