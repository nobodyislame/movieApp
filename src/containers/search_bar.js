import React,  { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchMovie }  from '../actions/index';

class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state = {
      search : ''
    }
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  onInputChange(event){
    this.setState({
      search : event.target.value
    });
  }
  onFormSubmit(event){
    event.preventDefault();
    this.props.fetchMovie(this.state.search);
  }

  render(){
    return(
      <form className="form-group" onSubmit={this.onFormSubmit}>
        <div className="row">
          <div className="col-md-offset-2 col-md-6">
            <input placeholder="Enter movie name"
                   className="form-control"
                   value={this.state.search}
                   onChange={this.onInputChange} />
          </div>
          <div className="col-md-2">
            <button className="btn btn-warning"
                    type="submit">
              Search Movie
            </button>
          </div>
        </div>
      </form>
    );
  }
}
const mapStateToDispatch = (dispatch)=>{
  return bindActionCreators({fetchMovie}, dispatch);
}

export default connect(null, mapStateToDispatch)(SearchBar);
