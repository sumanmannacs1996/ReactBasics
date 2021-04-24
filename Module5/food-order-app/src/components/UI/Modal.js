import React from 'react'
import styles from './Modal.module.css'
import ReactDom from 'react-dom';
export default function Modal(props) {
    const BackDrop = (props)=>{
        return <div className={styles.backdrop} onClick={props.backDropClick}></div>
    }
    const ModalOvelay =(props)=>{
        return <div className={styles.modal}>
            <div className={styles.content}>{props.children}</div>
        </div>
    }
    const portalElement = document.getElementById('overlays');
    return (
        <div>
           {ReactDom.createPortal(<BackDrop backDropClick={props.backDropClick}/>,portalElement)}
           {ReactDom.createPortal(<ModalOvelay>{props.children}</ModalOvelay>,portalElement)}
        </div>
    )
}
