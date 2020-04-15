import React from 'react';
import classes from './Logo.css'
import burgerLogo from '../../assets/images/favicon.ico';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}> 
        <img src={burgerLogo} alt="MyBurgerLogo"/>
    </div>
);

export default logo;

