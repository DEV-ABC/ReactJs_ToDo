import React from 'react';
import { connect } from 'react-redux';

import ToDoView from './ToDoView'
import ToDoModel from './ToDoModel'

class ToDoController extends React.Component {

  state = {
    items: null,
  };

  componentDidMount() {
    let toDoModel = new ToDoModel();
    toDoModel.getToDo(this.props.token, this.props.userID, this.returnConnection); 
  }

  returnConnection = (arrayItem) => {
    console.log(arrayItem);
    this.setState({
      items: arrayItem
    });
  } 


  render() {
    return (
      <ToDoView items={this.state.items} />
    );
  }
}

const mapStateToProps = state => {
  return {
    userID: state.auth.userID,
    token: state.auth.token
  };
};


export default connect(mapStateToProps)(ToDoController);
