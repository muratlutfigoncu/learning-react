import React from 'react';

//Option 1
// const withClass = props => (
//     <div className={props.classes}>{props.children}</div>
// );

//Option 2
const withClass = (WrappedComponent, className) => {
    return props => (
        <div className={className}>
            <WrappedComponent {...props}/>
        </div>
    );
}


export default withClass;