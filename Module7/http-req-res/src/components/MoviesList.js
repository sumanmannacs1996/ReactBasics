import React from 'react'
import styles from './MoviesList.module.css'
import Movie from './Movie';
export default function MoviesList(props) {
    return (
        <ul className={styles['movies-list']}>
            {props.movies.map((p)=><Movie key ={p.title} data={p}></Movie>)}
        </ul>
    )
}
