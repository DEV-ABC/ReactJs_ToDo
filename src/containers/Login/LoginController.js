import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

import LoginView from './LoginView'
import Aux from '../../hoc/Aux/Aux'
import LoginModel from './LoginModel'


class LoginPage extends React.Component {

  componentDidMount = () => {
      console.log("Login Did Mount");
  }

  componentWillMount = () => {
    console.log("Login Will Mount");
  }

  /**
   * On Valid Submit in Form
   */
  onValidSubmit = (event, values) => {

    this.props.onAuth(values.email, values.password);
  }

  componentDidUpdate = () => {
    console.log("Alterou");
    if (this.props.token !== "") {
      window.location = "dashboard";
    }
  }

  render() {
    
    return (
      <Aux>
        <LoginView
          onValidSubmit={this.onValidSubmit}
          loading={this.props.loading}
          error={this.props.error} />
      </Aux>
    )
  }

};

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    token: state.auth.token
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password) => dispatch(actions.makeLogin(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);