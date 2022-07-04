import React from 'react';
import Image from "next/image";
import styles from "../../styles/Goals.module.scss";
import flech from "../../public/icons/flech-icn.svg";

const GoalsSection = () => {
    return (
        <div className={styles.goals}>
            <div className={styles.topFlech}>
                <Image src={flech}/>
            </div>

        </div>
    );
};

export default GoalsSection;
