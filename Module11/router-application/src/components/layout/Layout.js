import React from 'react'
import Classes from './Layout.module.css';
import MainNavigation from './MainNavigation';
export default function Layout(props) {
    return (
        <div>
            <MainNavigation />
            <main className={Classes.main}>{props.children}</main>
        </div>
    )
}
