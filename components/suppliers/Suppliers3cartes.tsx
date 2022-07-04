import React from 'react';
import styles from "../../styles/Suppliers1.module.scss"
import TitleSec from "../title-sec/TitleSec";
import Image from "next/image";
import img from "../../public/images/cock.png";
import rec from "../../public/images/Groupe 918.png";
import rec2 from "../../public/images/Groupe 919.png";
import rec3 from "../../public/images/Groupe 920.png";
const Suppliers3cartes = () => {
    return (
        <div className={styles.suppliers}>

             <div className={styles.content}>
             <Image src={rec}/>
             <div className={styles.textBloc}>
                        <h1 className={styles.title}>
                            <span>L’achat d’énergie</span>
                            <p className={styles.p1}> Acheter son énergie, oui ! Mais pas à n’importe quel prix.</p>
                        </h1>
                        <p className={styles.p1}>
                        Nos experts analysent vos contrats et mettent en concurrence les fournisseurs 
                        du marché afin de fixer vos prix dans la durée. <br/><br/>Ils vous accompagnent dans le temps, surveillent 
                        en permanence les cours et tendances du marché du gaz et de l’électricité. <br/><br/>Si les prix baissent, 
                        ils vous aident à vous positionner au meilleur moment.
                        </p>
                        
                    </div>

            
             </div>
              <div className={styles.content}> 
             <div className={styles.textBloc}>
                        <h1 className={styles.title}>
                            <span>Une vision 360° de vos <br/>données en 1 clic</span>
                            <p className={styles.p1}> Surveiller, détecter chaque donnée<br/> de consommation est essentiel.</p>
                        </h1>
                        <p className={styles.p1}>
                        Dépassements, acheminement sur facturé, pics de<br/> consommations inexpliqués, erreurs de facturation. <br/><br/>
                        Tout cela sera du passé avec Cockpit. 
                        Un mauvais suivi de <br/>ses contrats et ce sont des dépenses qui s’envolent !
                        </p>
                        
                    </div>
                    <Image src={rec2}/>
             </div>
             <div className={styles.content}> 
             <Image src={rec3}/>
             <div className={styles.textBloc}>
                        <h1 className={styles.title}>
                            <span>Accompagnement</span>
                            <p className={styles.p1}>Nos experts vous accompagnent.</p>
                        </h1>
                        <p className={styles.p1}>
                        Nous vous mettons à disposition un consultant en énergie<br/> qui suit à la fois vos achats et vos données de<br/>  consommation.<br/> <br/> 
                        Plus besoin de vous soucier du sujet énergie ! <br/> Vous bénéficiez de l’accompagnement de deux sociétés<br/>  expertes dans leur domaine.
                        </p>
                        
                    </div>
             </div>
         </div>
    );
};

export default Suppliers3cartes;

