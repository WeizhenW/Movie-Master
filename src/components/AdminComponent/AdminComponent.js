import React, { Component } from 'react';
import { connect } from 'react-redux';

class AdminComponent extends Component {
  state = {
      genre: '',
  }

  componentDidMount() {
      this.props.dispatch({
          type: 'FETCH_ALL_GENRES'
      })
  };

  handleChange = (event) => {
      this.setState({
          genre: event.target.value,
      })
  }

  handleClick = () => {
      this.props.dispatch({
          type: 'POST_NEW_GENRE',
          payload: this.state,
      })
  }

  handleDelete = (event) => {
      this.props.dispatch({
          type:'DELETE_GENRE_FROM_DB',
          payload: event.target.id,
      })
  }

  render() {
    return (
      <div>
        <input placeholder="add genre" onChange={this.handleChange}></input>
        <button onClick={this.handleClick}>Add</button>
        <ul>
            {this.props.reduxState.allGenres.map(genre => {
                return <li 
                    key={genre.id}>{genre.name}
                    <button id={genre.id} onClick={this.handleDelete}>Delete</button>
                </li>
            })}
        </ul>
      </div>
    );
  }
}
const mapReduxStateToProps = reduxState => ({
  reduxState,
});
export default connect(mapReduxStateToProps)(AdminComponent);
