import React from 'react';
import styles from "../../styles/Suppliers.module.scss"
// import TitleSec from "../title-sec/TitleSec";
import Image from "next/image";
import img from "../../public/images/img-suppliers.png";
import TitleSec3 from '../title-sec/TitleSec3';

const SuppliersAbonnement = () => {
    return (
        <div className={styles.suppliers}>
              <div className={styles.clr}>
            <TitleSec3 title="Petit abonnement, Grande amélioration"/>
            <div>
                <p className={styles.clas1}> a partir de    <span className={styles.clas2}> 34,90€ </span> <span className={styles.clas3}>HT/ mois</span></p> 
                </div>
            <span >
            <p className={styles.parag1}> Je souhaite en savoir plus</p>
            </span>
            </div>
         
        </div>
    );
};

export default SuppliersAbonnement;
