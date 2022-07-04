import React from 'react';
// import styles from "../../styles/Page2.module.scss";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/images/logoFooter.png";
import styles from '../../styles/Benefits2.module.scss';
import TitleSec from "../title-sec/TitleSec";
const Page2 = () => {
    return (
        <div className={styles.benefits}>
            <div className="container">
               <div className={styles.footerContent}>
               <div className={styles.benefitsContent}>
               <span>
                   Visualisation des flux de consommation
               </span>
              
                <span>
                   Tableau de bord de pilotage
               </span>
              
                <span>
                   Contrôle de factures
               </span>
              
                <span>
                 Affichage Temps réel
               </span>
            
                <span>
                 Reporting RSE
               </span>
               
                <span>
                 Podium de vos sites
                </span>
                
                <span>
                 Gestion des alertes
                </span>
            
                <span>
                    Alertes dépassement
                </span>
                
                <button className="primary-btn">
                Encore plus d'avantages                       </button>
            </div>
                 
                   {/* <div className={styles.secondBlc}>
                   <Image src="/Groupe 924.png" alt=" aB"
            
              width={844}
              height={612}
              
            />
                   </div> */}
                   {/* <div className={styles.thirdBlc}>
                       <button className="primary-btn">
                           Prendre rendez-vous avec un expert
                       </button>
                       <div className={styles.logFoot}>
                           <Image src={logo}/>
                       </div>
                   </div> */}
               </div>
            </div>
        </div>
    );
};

export default Page2;
