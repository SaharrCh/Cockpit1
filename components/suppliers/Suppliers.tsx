import React from 'react';
import styles from "../../styles/Suppliers.module.scss"
import TitleSec from "../title-sec/TitleSec";
import Image from "next/image";
import img from "../../public/images/img-suppliers.png";

const Suppliers = () => {
    return (
        <div className={styles.suppliers}>
            <TitleSec title="Nos fournisseurs partenaires"/>
            <p>Nous mettons en concurrence une multitude de fournisseurs de gaz naturel et d’électricité afin de
                permettre à nos clients d’obtenir un nouveau contrat adapté à leur activité avec une réduction
                considérable sur leur facture d’énergie.</p>
            <div className={styles.blcImg}>
                <Image src={img}/>
            </div>
        </div>
    );
};

export default Suppliers;
