import React from 'react'
import styles from './Section.module.css'
export default function Section(props) {
    return <div className={styles.section}>{props.children}</div>
}
