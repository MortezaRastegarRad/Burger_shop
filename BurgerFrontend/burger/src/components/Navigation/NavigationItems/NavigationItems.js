import React from "react";

import NavigationItem from "./NavigationItem/NavigationItem";
import styles from './NavigationItems.module.css'
const NavigationItems = () => {
  return(
      <ul className={styles.NavigationItems}>
          <NavigationItem link="/" active>Burger Builder</NavigationItem>
          <NavigationItem link="/">Check out</NavigationItem>
      </ul>
  );
};

export default NavigationItems;