import React from 'react'
import classes from './Notification.module.css';
export default function Notification(props) {
    let specialClass = '';
    if(props.status ==='error'){
        specialClass = classes.error;
    }
    if(props.status === 'success'){
        specialClass = classes.success;
    }
    const notificationClass = `${classes.notification} ${specialClass}`;
    return (
        <section className={notificationClass}>
            <h2>{props.title}</h2>
            <p>{props.message}</p>
        </section>
    )
}
