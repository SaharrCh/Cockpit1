import React from 'react';
import styles from "../../styles/MainContent.module.scss";
import Header from "../../components/header/Header";
import SectionTop from "../../components/section-top/SectionTop";
import Footer from "../../components/footer/Footer";
import Suppliers from "../../components/suppliers/Suppliers";
import GoalsSection from "../../components/goals-section/GoalsSection";
import Suppliers1 from "../../components/suppliers/Suppliers1";
import Suppliers2 from "../../components/suppliers/Suppliers2";
import Avis from '../../components/avis/Avis';
import Suppliers4 from '../../components/suppliers/Suppliers4';
import ThirdSection from "../../components/third-section/ThirdSection";
import Benefits from "../../components/benefits/Benefits";
import Suppliers3cartes from '../../components/suppliers/Suppliers3cartes';

const MainContent = () => {
    return (
        <div className={styles.mainContent}>
            <Header />
            <SectionTop />
            <GoalsSection />
            <Suppliers1 />
            <ThirdSection/>
            <Suppliers3cartes/>
            {/* <Sec1/> */}
            {/* <GoalsSection /> */}
            {/* <Suppliers2 /> */}
            <Benefits/>
            <Avis/>
            <Suppliers4 />
            <Suppliers />
            <Footer />
        </div>
    );
};

export default MainContent;
