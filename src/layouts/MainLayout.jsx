import styles from "../assets/styles/layouts/mainLayout.module.scss";
import SceneLayout from "./SceneLayout.jsx";
import ColorCube from "../components/ColorCube.jsx";
import NavCarousel from "./NavCarousel.jsx";

export default function MainLayout() {

    return (
        <main className={ styles.mainLayout }>
            <NavCarousel />
            <SceneLayout>
                <ColorCube />
            </SceneLayout>
        </main>
    );
}