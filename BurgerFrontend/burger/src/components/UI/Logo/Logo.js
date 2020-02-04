import React from "react";

import styles from './Logo.module.css'
import BurgerLogo from "../../../assets/images/burger_logo.png";

const Logo = () => {
    return (
        <div className={styles.Logo}>
            <img src={BurgerLogo} alt="MyLogo"/>
        </div>
    );
};

export default Logo;