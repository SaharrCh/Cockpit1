import React from 'react';
import styles from '../../styles/Benefits.module.scss';
import TitleSec from "../title-sec/TitleSec";

const Benefits = () => {
    return (
        <div className={styles.benefits}>
            <TitleSec title="Vos avantages"/>
            <p>
                Une solution complète vous permettant de faire partie des premiers à entrer dans l’Energy management de
                demain !
            </p>
            <div className={styles.benefitsContent}>
               <span>
                   Visualisation des flux de consommation
               </span>
                <span>
                    Optimisation des abonnements
               </span>
                <span>
                   Tableau de bord de pilotage
               </span>
                <span>
                   Prédiction de consommation
               </span>
                <span>
                   Contrôle de factures
               </span>
                <span>
                   Veille tarifaire
               </span>
                <span>
                 Affichage Temps réel
               </span>
                <span>
                   Surveillance des marchés
               </span>
                <span>
                 Reporting RSE
               </span>
                <span>
                  Newsletter sur les tendances du marché
               </span>
                <span>
                 Podium de vos sites
                </span>
                <span>
                  Un professionnel dédié
               </span>
                <span>
                 Gestion des alertes
                </span>
                <span>
            Gain de temps
               </span>
                <span>
                    Alertes dépassement
                </span>
                <span>
                  Simple d’utilisation
                </span>
            </div>
        </div>
    );
};

export default Benefits;
