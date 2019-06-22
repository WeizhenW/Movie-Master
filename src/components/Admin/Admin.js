import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminComponent from '../AdminComponent/AdminComponent';

class Admin extends Component {
  state = {
    userName: '',
    password: '',
    correctLogin: false,
  }
  handleChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value
    })
  }

  handleSubmit = () => {
    if(this.state.userName==='Weizhen' && this.state.password==='1234') {
      this.setState({
        correctLogin: true,
      })
    }
    console.log(this.state);
  }

  render() {
    return (
      <div>
        {/* {JSON.stringify(this.state)} */}
        {this.state.correctLogin?
        <>
        <p>correct</p>
        <AdminComponent />
        </>
        :
        <>
        <input onChange={this.handleChangeFor('userName')} placeholder="user name" />
        <input onChange={this.handleChangeFor('password')} placeholder="password" />
        <button onClick={this.handleSubmit}>Log In</button>
      </>
        }
      
        
      </div>
    );
  }
}
const mapReduxStateToProps = reduxState => ({
  reduxState,
});
export default connect(mapReduxStateToProps)(Admin);
