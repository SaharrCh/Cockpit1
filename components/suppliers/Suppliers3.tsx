import React from 'react';
import styles from "../../styles/Suppliers3.module.scss"
import TitleSec2 from "../title-sec/TitleSec2";
// import Image from "next/image";
// import img from "../../public/images/img-suppliers.png";

const Suppliers3 = () => {
    return (
        <div className={styles.suppliers3}>
            <TitleSec2 title="Vos avantages"/>
            <p className={styles.ecr} >
                Une solution complète vous permettant de faire partie  <br></br>des premiers 
            à entrer dans l’Energy management de demain !</p>
            {/* <div className={styles.blcImg}>
                 <Image src={img}/> 
            </div> */}
        </div>
    );
};

export default Suppliers3;