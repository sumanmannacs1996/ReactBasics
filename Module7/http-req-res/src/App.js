import React,{useState} from 'react';
import './App.css';
import MoviesList from './components/MoviesList';
function App() {
  const [Movies,setMovies]= useState([]);
  const fechMovieHandler= async()=>{
    const res = await fetch('https://swapi.dev/api/films/');
      const data= await res.json();
      setMovies(data.results);
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
