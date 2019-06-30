import React, { Component } from 'react';
import { Card, Checkbox } from 'semantic-ui-react';
import { getAllOpinion, deleteOpinion } from '../actions';
import { connect } from 'react-redux';

class AllOpinions extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getOpinions();
  }

  render() {
    return (
      <div>

      </div>
    )
  };
}

const mapStateToProps = state => {
  return {
    opinionList: state.opinions,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getOpinions: () => dispatch(getAllOpinion()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllOpinions);
