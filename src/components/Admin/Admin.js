import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminComponent from '../AdminComponent/AdminComponent';
import './Admin.css';

import Button from '@material-ui/core/Button';


class Admin extends Component {
  state = {
    userName: '',
    password: '',
    correctLogin: false,
  }
  //get input for username and password
  handleChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value
    })
  }
  //submit the input
  handleSubmit = () => {
    //if username and password match the predefined values, change the boolean in local state
    if (this.state.userName === 'camera' && this.state.password === 'action') {
      this.setState({
        correctLogin: true,
      })
    }
  }

  render() {
    return (
      //ternary operator to conditionally render the content
      //if truthy-> render the AdminComponent, if falsy->render the login window again
      <div className="admin">
        {this.state.correctLogin ?
          <>
            <AdminComponent />
          </>
          :
          <div className="loginDiv">
            <input id="userName" onChange={this.handleChangeFor('userName')} placeholder="user name" />
            <br />
            <input id="psw" onChange={this.handleChangeFor('password')} placeholder="password" />
            <br />
            <Button variant="contained" color="primary" onClick={this.handleSubmit}>Log In</Button>
          </div>
        }


      </div>
    );
  }
}
const mapReduxStateToProps = reduxState => ({
  reduxState,
});
export default connect(mapReduxStateToProps)(Admin);
