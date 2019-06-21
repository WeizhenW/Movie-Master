import React, { Component } from 'react';
import { connect } from 'react-redux';
//router
import { HashRouter as Router, Route, Link } from 'react-router-dom'; //alias



class Detail extends Component {

  render() {
    return (
        <div>
            {/* {JSON.stringify(this.props.reduxState.oneMovie[0])} */}
            
            <Link to="/"><button>Back</button></Link>
            <button>Edit</button>
            <br />
            <br />
            <img src={this.props.reduxState.oneMovie[0].poster} />
            <h3>{this.props.reduxState.oneMovie[0].title}</h3>
            <p>{this.props.reduxState.oneMovie[0].description}</p>
        </div>
    );
  }
}
const mapReduxStateToProps = reduxState => ({
    reduxState,
});
export default connect(mapReduxStateToProps)(Detail);
