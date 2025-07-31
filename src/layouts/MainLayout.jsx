import styles from "../assets/styles/layouts/mainLayout.module.scss";
import ForegroundSceneLayout from "./ForegroundSceneLayout.jsx";
import ColorCube from "../components/ColorCube.jsx";
import NavCarousel from "./NavCarousel.jsx";

export default function MainLayout() {

    return (
        <main className={ styles.mainLayout }>
            <NavCarousel />
            <ForegroundSceneLayout>
                <ColorCube />
            </ForegroundSceneLayout>
        </main>
    );
}