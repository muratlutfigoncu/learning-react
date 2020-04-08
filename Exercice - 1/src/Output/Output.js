import React from 'react';
import './Output.css'

const UserInput = (props) => {
    return (
        <div className='userOutput'>
            <p>This is a paragraf. And here's maybe a name: {props.name}</p>
        </div>
    )
};

export default UserInput;