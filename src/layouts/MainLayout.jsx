import styles from "../assets/styles/layouts/mainLayout.module.scss";
import NavCarousel from "./NavCarousel.jsx";
import BackgroundSceneLayout from "./BackgroundSceneLayout.jsx";
import ForegroundSceneLayout from "./ForegroundSceneLayout.jsx";
import ColorCube from "../components/ColorCube.jsx";

export default function MainLayout() {

    return (
        <main className={ styles.mainLayout }>
            <BackgroundSceneLayout />
            <ForegroundSceneLayout>
                <NavCarousel />
                <ColorCube />
            </ForegroundSceneLayout>
        </main>
    );
}