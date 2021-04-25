import React,{useRef} from 'react'
import styles from './AddMovie.module.css'

export default function AddMovie(props) {
    const titleRef = useRef('');
    const openingTextRef = useRef('');
    const dateRef = useRef('');
    const submitHandler=(event)=>{
        event.preventDefault();
        const movie ={
            title:titleRef.current.value,
            release_date:dateRef.current.value,
            opening_crawl:openingTextRef.current.value
        }
        props.onAddMovie(movie);

    }
    return (
        <form onSubmit={submitHandler}>
            <div className={styles.control}>
                <label htmlFor='title'>Title</label>
                <input type='text' id='title' ref={titleRef}></input>
            </div>
            <div className={styles.control}>
                <label htmlFor='opening-text'>Opening Text</label>
                <textarea row='5' id ='opening-text' ref={openingTextRef}></textarea>
            </div>
            <div className={styles.control}>
                <label htmlFor='date'>Release Date</label>
                <input type='text' id='date' ref={dateRef}></input>
            </div>
            <button>Add Movie</button>
        </form>
    )
}
