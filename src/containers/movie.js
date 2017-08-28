import React, { Component } from 'react';
import { connect } from 'react-redux';

class Movie extends Component{

  render(){
    if(!this.props.movie){
      return(
        <div className="text-center">
          <h3 className="text-muted">Please enter movie name to view details</h3>
        </div>
      );
    }
    else{
      return(
        <div className="row">
          <div className="col-md-4">
            <img className="img-thumbnail" src={this.props.movie.Poster}/>
          </div>
          <div className="col-md-8 text-center">
            <div className="well">
              <h4>Movie Name</h4>
              <p> {this.props.movie.Title}</p>
              <h4>Released Year</h4>
              <p>{this.props.movie.Released}</p>
              <h4>Movie Runtime</h4>
              <p>{this.props.movie.Runtime}</p>
              <h4>Movie Genre</h4>
              <p>{this.props.movie.Genre}</p>
              <h4>Director</h4>
              <p>{this.props.movie.Director}</p>
              <h4>Actors</h4>
              <p>{this.props.movie.Actors}</p>
              <h4>Plot</h4>
              <p>{this.props.movie.Plot}</p>
              <h4>Awards</h4>
              <p>{this.props.movie.Awards}</p>
              <h4>Ratings</h4>
              <span>
                {this.props.movie.Ratings[0].Source} &nbsp;
                <span className="label label-warning">
                  {this.props.movie.Ratings[0].Value}
                </span> &nbsp;
                {this.props.movie.Ratings[1].Source} &nbsp;
                <span className="label label-danger">
                  {this.props.movie.Ratings[1].Value}
                </span>
              </span>
            </div>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = ({ movie })=>{
  return{
    movie
  }
}

export default connect(mapStateToProps)(Movie);
