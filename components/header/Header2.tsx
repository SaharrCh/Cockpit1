import React from 'react';
import styles from "../../styles/Header.module.scss";
import Link from "next/link";

const Header = () => {
    return (
        <div className={styles.header}>
          <div className="container">
          <div className={styles.headerContent}>
              <Link href="/">
                  <a className={styles.logo}/>
              </Link>
             
              
          </div>
          </div>
        </div>
    );
};

export default Header;
