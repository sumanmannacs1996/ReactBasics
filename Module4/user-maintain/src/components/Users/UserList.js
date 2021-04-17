import React from 'react';
import Card from '../UI/Card'
import styles from './UserList.module.css';
const UserList =(props)=>{
    console.log(props.listData);
    return(
        <Card newStyle={styles.users}>
        <ul>
            {props.listData.map((p)=>(
            <li id={p.username}>
                {p.username} ({p.age} years old)
            </li>
            ))}
        </ul>
        </Card>
    );
}

export default UserList;