import React, { useState, useEffect } from 'react';
import axios from 'axios';

const initialMovie = {
    id: '',
    title: '',
    director: '',
    metascore: '',
    stars: ''
  };


  const UpdateForm = (props) => {
    const [movie, setMovie] = useState(initialMovie);
      
    return (
      <div>
        <h2>Update movie</h2>
        {/* onSubmit={handleSubmit} */}
        <form  >
          <input
            type="text"
            name="id"
            // onChange={this.changeHandler}
            placeholder="id"
            // value={this.movie.name}
          />
          <div className="baseline" />
  
          <input
            type="number"
            name="title"
            // onChange={this.changeHandler}
            placeholder="Title"
            // value={this.movie.price}
          />
          <div className="baseline" />
  
          <input
            type="text"
            name="director"
            // onChange={this.changeHandler}
            placeholder="director"
            // value={this.movie.imageUrl}
          />
          <div className="baseline" />
  
          <input
            type="text"
            name="metascore"
            // onChange={this.changeHandler}
            placeholder="metascore"
            // value={this.movie.description}
          />
          <div className="baseline" />
  
          <input
            type="text"
            name="stars"
            // onChange={this.changeHandler}
            placeholder="stars"
            // value={this.movie.shipping}
          />
          <div className="baseline" />
          <button className="md-button form-button">Update</button>
        </form>
      </div>
 );
}

export default UpdateForm;