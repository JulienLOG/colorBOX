import styles from "../assets/styles/layouts/mainLayout.module.scss";
import ColorCube from "../components/ColorCube";

export default function MainLayout() {
    return (
        <main className={ styles.mainLayout }>
            <ColorCube />
        </main>
    );
}