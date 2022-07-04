import React from 'react';
import styles from "../../styles/TitleSec.module.scss";

interface Props {
    title: string
}

const TitleSec = (Props: Props) => {
    return (
        <div className={styles.titleSec}>
           <h1>{Props.title}</h1>
        </div>
    );
};

export default TitleSec;
