import './Button.css';
const Button =(props)=>{
    return(
        <button type={props.type} className="button" onClick={props.click}>{props.children}</button>
    );
}

export default Button;