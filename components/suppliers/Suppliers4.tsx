import React from 'react';
import styles from "../../styles/Suppliers.module.scss"
import TitleSec from "../title-sec/TitleSec";
// import Image from "next/image";
// import img from "../../public/images/img-suppliers.png";

const Suppliers4 = () => {
    return (
        <div className={styles.suppliers}>
            <TitleSec title="Nos clients en parlent"/>
            <p>
                {/* <div className={styles.faza}> </div> */}
                
                <br></br>Je suis très satisfait de notre collaboration avec Citron®. La plateforme web nous fait
                 gagner du temps grâce à l’automatisation de la collecte et de l’analyse de nos
                  données que nous faisions sur Excel. 
                  <br></br>
                  <br></br>
                  Un Energy Manager nous accompagne dorénavant dans le traitement des alertes
                   et dans la définition d’une stratégie énergétique </p>
                   <p> Directeur des achats Groupe d’une grande entreprise française</p>

            {/* <div className={styles.blcImg}>
                 <Image src={img}/> 
            </div> */}
        </div>
    );
};

export default Suppliers4;