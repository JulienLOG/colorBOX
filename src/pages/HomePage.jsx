import styles from "../assets/styles/pages/homePage.module.scss";
import HeaderLayout from "../layouts/HeaderLayout.jsx";
import MainLayout from "../layouts/MainLayout.jsx";

export default function HomePage() {
    return (
        <div className={styles.homePage}>
            <HeaderLayout></HeaderLayout>
            <MainLayout></MainLayout>
        </div>
    );
};  