import React from 'react';

const char=(props)=>{
    let style={
        display:"inline-block",
        padding:"16px",
        margin:"16px",
        border:"1px solid black",
        textAllign:"center",
        background:"black",
        color:"white",
        fontWeight:"bold"
    };
    return(
        <div style={style} onClick={props.delete}>
            {props.character}
        </div>
    );
}

export default char;