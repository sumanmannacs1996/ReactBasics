import React,{useState,useEffect,useCallback} from 'react';
import './App.css';
import MoviesList from './components/MoviesList';
import AddMovie from './components/AddMovie'
function App() {
  const [Movies,setMovies]= useState([]);
  const [Loading,setLoading] = useState(false);
  const [error,setError] = useState(undefined);
  const fechMovieHandler= useCallback( async ()=>{
      setLoading(true);
      setError(undefined);
    try{
      const res = await fetch('https://swapi.dev/api/films/');
      console.log("Fetch!!");
      if(!res.ok){
        throw new Error("Something went wrong..");
      }
      const data= await res.json();
      setMovies(data.results);
      setLoading(false);
    }catch(e){
      setError(e.message);
      setLoading(false);
      }
  },[]);

  useEffect(()=>{
    fechMovieHandler();
  },[fechMovieHandler]);

  const addMovieHandler=(movie)=>{
    console.log(movie);
  }

  return (
    <div className="App">
      <section>
        <AddMovie onAddMovie={addMovieHandler}></AddMovie>
      </section>
      <section>
        <button onClick={fechMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        {!Loading && Movies.length>0 && <MoviesList movies={Movies} />}
        {!Loading && error && <p>{error}</p>}
        {!Loading && Movies.length===0 && <p>No Movies Present!!</p>}
        {Loading && <p>Lading...</p>}
      </section>
    </div>
  );
}
export default App;
