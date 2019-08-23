import React, { useState, useEffect } from 'react';
import axios from 'axios';

const initialMovie = {
    id: '',
    title: '',
    director: '',
    metascore: '',
    stars: ['hello']
  };

  

  const UpdateForm = (props) => {
    const [movie, setMovie] = useState(initialMovie);

    const handleChange = event => {
        setMovie({...movie, [event.target.name]: event.target.value})
    };

    const handleThis = event => {
     let value = event.target.value;
     let name = event.target.name;
     if (name === 'stars'){
        movie.stars.push(value)
     }   
    }

    const handleSubmit = event =>{
        event.preventDefault();
        console.log(movie)
        axios
            .put(`http://localhost:5000/api/movies/${movie.id}`, movie)
            .then(res =>{
                console.log(res)
            })
    }

    return (
      <div>
        <h2>Update movie</h2>
        <form  onSubmit = {handleSubmit}>
          <input
            type="text"
            value={movie.id}
            name="id"
            onChange= {handleChange}
            placeholder="id"
          />
          <div className="baseline" />
  
          <input
            type="text"
            value={movie.title}
            name="title"
            onChange= {handleChange}
            placeholder="Title"

          />
          <div className="baseline" />
  
          <input
            type="text"
            value={movie.director}
            name="director"
            onChange= {handleChange}
            placeholder="director"
          />
          <div className="baseline" />
  
          <input
            type="text"
            value={movie.metascore}
            name="metascore"
            onChange= {handleChange}
            placeholder="metascore"
          />
          <div className="baseline" />
  
          <input
            type="text"
            value={movie.stars}
            name="stars"
            onChange= {handleThis}
            placeholder="stars"
          />
          <div className="baseline" />
          <button className="md-button form-button" type="submit" >Update</button>
        </form>
      </div>
 );
}

export default UpdateForm;