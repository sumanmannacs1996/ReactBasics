import React,{useState} from 'react';
import './App.css';
import MoviesList from './components/MoviesList';
function App() {
  const [Movies,setMovies]= useState([]);
  const fechMovieHandler=()=>{
    fetch('https://swapi.dev/api/films/').then((res)=>{
      return res.json();
    }).then((data)=>{
      setMovies(data.results);
    })
  }
  return (
    <div className="App">
      <section>
        <button onClick={fechMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={Movies} />
      </section>
    </div>
  );
}
export default App;
