import React from 'react';
import styles from "../../styles/Input.module.scss";

interface Props {
    label?: string,
    type?: string
}

const Input = (Props: Props) => {
    return (
        <div className={styles.blcInput}>
            <label>
                {Props.label}
            </label>
            <input type={Props.type}/>
        </div>
    );
};

export default Input;
