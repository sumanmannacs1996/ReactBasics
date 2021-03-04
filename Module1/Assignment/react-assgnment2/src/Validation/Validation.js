import React from 'react';

const validation =(props)=>{
    let validationText =props.check >= 5 ? "Text Long Enough!" : "Text Too Short!!";
    return(
        <div>
            <p>{validationText}</p>
        </div>
    );
};

export default validation;