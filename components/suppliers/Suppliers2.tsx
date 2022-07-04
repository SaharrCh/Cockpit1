import React from 'react';
import styles from "../../styles/Suppliers.module.scss"
import TitleSec from "../title-sec/TitleSec";
// import Image from "next/image";
// import img from "../../public/images/img-suppliers.png";

const Suppliers2 = () => {
    return (
        <div className={styles.suppliers}>
            <TitleSec title="Vos avantages"/>
            <p>Une solution complète vous permettant de faire partie des premiers <br></br>
                 à entrer dans l’Energy management de demain !</p>
            {/* <div className={styles.blcImg}>
                 <Image src={img}/> 
            </div> */}
        </div>
    );
};

export default Suppliers2;