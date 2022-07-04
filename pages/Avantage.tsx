import React from 'react';
import styles from "../styles/MainContent.module.scss";
import Header2 from "../components/header/Header2";
import SectionTop2 from "../components/section-top/SectionTop2";
import Footer from "../components/footer/Footer";
import Suppliers3 from '../components/suppliers/Suppliers3';
import Page2 from '../components/page2/Page2';



const Avantage = () => {
    return (
        <div className={styles.mainContent}>
            <Header2 />
            <SectionTop2 />
            <Suppliers3 />
            <Page2 />

            {/* <GoalsSection /> */}
           
            <Footer />
        </div>
    );
};

export default Avantage;