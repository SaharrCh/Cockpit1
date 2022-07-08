import React from "react";
import styles from "../../styles/Suppliers.module.scss";
import TitleSec from "../title-sec/TitleSec";


const Suppliers4 = () => {
  return (
    <div className={styles.suppliers}>
      <div className={styles.layout}>
        <TitleSec title="Nos clients en parlent" />

        <p>
          <br></br> <span className={styles.Acc}>” </span> Je suis très
          satisfait de notre collaboration avec Citron®. La plateforme web nous
          fait gagner du temps grâce à l’automatisation de la collecte et de
          l’analyse de nos données que nous faisions sur Excel.
          <br></br>
          <br></br>
          Un Energy Manager nous accompagne dorénavant dans le traitement des
          alertes et dans la définition d’une stratégie énergétique
          <br></br> <span className={styles.Acc2}>” </span>{" "}
        </p>

        <p className={styles.Acc3}>
          {" "}
          Directeur des achats Groupe d’une grande entreprise française
        </p>
      </div>
    </div>
  );
};

export default Suppliers4;
