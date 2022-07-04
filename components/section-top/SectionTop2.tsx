import React from 'react';
import styles from "../../styles/SectionTop.module.scss"
import Image from "next/image";
import img from "../../public/images/top-img.svg";

const SectionTop = () => {
    return (
        <div className={styles.sectionTop}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.textBloc}>
                        <h1 className={styles.title}>
                            <span>Entreprises,</span>
                            simplifiez-vous l’énergie !
                        </h1>
                        <p>
                            Qui a dit que renégocier ses contrats était compliqué ? Qui a dit que comprendre ses
                            factures d'énergie était un casse tête ? Qui a dit qu'il subissait ses factures, les
                            dépassements de puissance et n'avait aucun moyen de les vérifier ?
                        </p>
                        <p>
                            Vous peut être ?
                        </p>
                      
                    </div>
                    <Image src={img}/>
                </div>
            </div>
        </div>
    );
};

export default SectionTop;
