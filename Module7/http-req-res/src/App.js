import React,{useState} from 'react';
import './App.css';
import MoviesList from './components/MoviesList';
function App() {
  const [Movies,setMovies]= useState([]);
  const [Loading,setLoading] = useState(false);
  const fechMovieHandler= async()=>{
    setLoading(true);
    const res = await fetch('https://swapi.dev/api/films/');
      const data= await res.json();
      setMovies(data.results);
      setLoading(false);
    }
  return (
    <div className="App">
      <section>
        <button onClick={fechMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        {!Loading && Movies.length>0 && <MoviesList movies={Movies} />}
        {!Loading && Movies.length===0 && <p>No Movies Present!!</p>}
        {Loading && <p>Lading...</p>}
      </section>
    </div>
  );
}
export default App;
