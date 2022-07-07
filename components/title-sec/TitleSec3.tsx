import React from 'react';
import styles from "../../styles/TitleSec3.module.scss";

interface Props {
    title: string
}

const TitleSec3 = (Props: Props) => {
    return (
        <div className={styles.titleSec3}>
           <h1>{Props.title}</h1>
        </div>
    );
};

export default TitleSec3;
