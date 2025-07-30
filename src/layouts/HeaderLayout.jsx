import styles from "../assets/styles/layouts/headerLayout.module.scss";
import TitleMain from "../components/TitleMain.jsx";

export default function HeaderLayout() { 
    return (
        <header className={styles.headerLayout}>
            <TitleMain title="ColorBOX" showText={ true } text="by JulienLOG"/>
        </header>
    );
};