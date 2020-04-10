import React from 'react';

const validationComp = (props) => {

	//receives textLength as props
	let validationMessage = "Message ok"
	if(props.textLength <= 5){
		validationMessage = "Too short"
	}  

    return (
        <div className = "Validation">            
            <p>{validationMessage}</p>
        </div>
    )
};

export default validationComp;