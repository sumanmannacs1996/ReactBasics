import React from 'react';
import styles from './Movie.module.css'
const Movie =(props)=>{
    return(
        <li className={styles.movie}>
            <h2>{props.data.title}</h2>
            <h3>{props.data.release_date}</h3>
            <p>{props.data.opening_crawl}</p>
        </li>
    )
}

export default Movie;