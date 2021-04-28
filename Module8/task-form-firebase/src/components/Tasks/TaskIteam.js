import React from 'react'
import styles from './TaskItem.module.css'
export default function TaskIteam(props) {
    return <li className={styles.task}>{props.children}</li>
}
