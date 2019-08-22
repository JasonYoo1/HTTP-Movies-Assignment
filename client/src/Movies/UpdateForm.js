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
    
    useEffect(() => {
      const id = props.match.params.id;
      const movieInArr = props.movies.find(movie => `${movie.id}` === id);
      if (movieInArr) setMovie(movieInArr);
    }, [props.movies, props.match.params.id]);
  
    const changeHandler = ev => {
      ev.persist();
      let value = ev.target.value;
      if (ev.target.name === 'price') {
        value = parseInt(value, 10);
      }
  
      setMovie({
        ...movie,
        [ev.target.name]: value
      });
    };
  
    const handleSubmit = e => {
      e.preventDefault();
      axios
        .put(`http://localhost:5000/api/movies/${movie.id}`, movie)
        .then(res => {
          console.log(res);
          setMovie(initialMovie);
          props.updatemovies(res.data);
          props.history.push('/movie-list');
        })
        .catch(err => console.log(err.response));
    };
  
    return (
      <div>
        <h2>Update movie</h2>
        {/* onSubmit={handleSubmit} */}
        <form >
          <input
            type="text"
            name="name"
            // onChange={changeHandler}
            placeholder="name"
            // value={movie.name}
          />
          <div className="baseline" />
  
          <input
            type="number"
            name="price"
            // onChange={changeHandler}
            placeholder="Price"
            // value={movie.price}
          />
          <div className="baseline" />
  
          <input
            type="string"
            name="imageUrl"
            // onChange={changeHandler}
            placeholder="Image"
            // value={movie.imageUrl}
          />
          <div className="baseline" />
  
          <input
            type="string"
            name="description"
            // onChange={changeHandler}
            placeholder="Description"
            // value={movie.description}
          />
          <div className="baseline" />
  
          <input
            type="string"
            name="shipping"
            // onChange={changeHandler}
            placeholder="Shipping"
            // value={movie.shipping}
          />
          <div className="baseline" />
          <button className="md-button form-button">Update</button>
        </form>
      </div>
 );
};

export default UpdateForm;