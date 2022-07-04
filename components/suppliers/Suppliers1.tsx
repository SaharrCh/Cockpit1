import React from 'react';
import styles from "../../styles/Suppliers.module.scss"
import TitleSec from "../title-sec/TitleSec";
import Image from "next/image";
import img from "../../public/images/cock.png";
import rec from "../../public/images/Groupe 918.png";
import rec2 from "../../public/images/Groupe 919.png";
import rec3 from "../../public/images/Groupe 920.png";
const Suppliers1 = () => {
    return (
        <div className={styles.suppliers}>
            <TitleSec title="Notre objectif"/>
            <p>Vous faire bénéficier d’une solution simple et clés en main qui répond à l’ensemble
                 de ses problématiques. Un service vous permettant d’optimiser vos coûts de 
                 fourniture d’énergie et d’utiliser la donnée pour traquer la moindre économies.</p>
         
            
        </div>
    );
};

export default Suppliers1;
