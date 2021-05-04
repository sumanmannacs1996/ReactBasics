import {NavLink} from 'react-router-dom'
import classes from './MainHeader.module.css'
export default function MainHeader() {
    return (
        <div className={classes.header}>
            <ul>
                <li>
                    <NavLink to='/welcome'>Welcome</NavLink>
                </li>
                <li>
                    <NavLink to='/product'>Product</NavLink>
                </li>
            </ul>
        </div>
    )
}
