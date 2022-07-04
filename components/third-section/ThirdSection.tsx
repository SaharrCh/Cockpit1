import React from 'react';
import styles from "../../styles/ThirdSection.module.scss"
import Image from "next/image";
import bg from "../../public/images/bg-sect.png";
import logo from "../../public/images/logo.svg";
import logo1 from "../../public/images/logo-card1.png";
import logo2 from "../../public/images/logo-card.png";

const ThirdSection = () => {
    return (
        <div className={styles.thirdSection}>
            <div className={styles.bg}>
                <Image src={bg}/>
            </div>
            <div className={styles.whiteCircle}>
                <div className={styles.logo}>
                    <Image src={logo}/>
                </div>
            </div>
            <div className={styles.cards}>
                <div className={styles.card}>
                    <div className={styles.logoCard}>
                        <Image src={logo1}/>
                    </div>
                    <h1 className={styles.titleCard}>
                        Courtage en énergie
                    </h1>
                    <p>
                        Depuis 2013, Place des energies aide les entreprises de toutes tailles à réduire
                        significativement le montant de leur budget lié à l’énergie.
                    </p>
                    <p> Actrice indépendante de l’énergie,
                        Place des energies se distingue grâce à ses partenariats établis avec la plupart des
                        fournisseurs d’énergie présents sur le territoire français.</p>
                </div>
                <div className={styles.card}>
                    <div className={styles.logoCard}>
                        <Image src={logo2}/>
                    </div>
                    <h1 className={styles.titleCard}>
                        Citron® énergie
                    </h1>
                    <p>
                        Citron® centralise, suit et analyse vos consommations énergétiques.
                    </p>
                    <p>
                        Outil digital, il collecte
                        automatiquement l’ensemble des données nécessaires à l’optimisation de la performance
                        énergétique d’un parc immobilier ou de véhicules.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ThirdSection;
