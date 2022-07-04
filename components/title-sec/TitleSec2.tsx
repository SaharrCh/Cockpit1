import React from 'react';
import styles from "../../styles/TitleSec2.module.scss";

interface Props {
    title: string
}

const TitleSec2 = (Props: Props) => {
    return (
        <div className={styles.titleSec}>
           <h1>{Props.title}</h1>
        </div>
    );
};

export default TitleSec2;
