import React from 'react';
import styles from "../../styles/Footer.module.scss";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/images/logoFooter.png";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className="container">
               <div className={styles.footerContent}>
                 <div className={styles.fistBlc}>
                     <Link href="/">
                         <a className={styles.logo}/>
                     </Link>
                     <p>Services pour la performance énergétique et technique des entreprises, des parcs immobiliers, des copropriétés,…</p>
                 </div>
                   <div className={styles.secondBlc}>
                      <p className={styles.titl}>
                          Raccourcis
                      </p>
                       <div>
                           <div className={styles.gridLinks}>
                               <Link href="/">
                                   <p>Accueil</p>
                               </Link>
                               <Link href="/">
                                   <p>Tarifs</p>
                               </Link>
                           </div>
                           <div className={styles.gridLinks}>
                               <Link href="/">
                                   <p>Notre solution</p>
                               </Link>
                               <Link href="/">
                                   <p>Notre solution</p>
                               </Link>
                           </div>
                           <Link href="/">
                               <p>nos clients en parlent</p>
                           </Link>
                       </div>
                   </div>
                   <div className={styles.thirdBlc}>
                       <button className="primary-btn">
                           Prendre rendez-vous avec un expert
                       </button>
                       <div className={styles.logFoot}>
                           <Image src={logo}/>
                       </div>
                   </div>
               </div>
            </div>
        </div>
    );
};

export default Footer;
