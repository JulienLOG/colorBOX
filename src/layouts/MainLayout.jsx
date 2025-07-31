import styles from "../assets/styles/layouts/mainLayout.module.scss";
import ColorCube from "../components/ColorCube";
import SceneLayout from "./SceneLayout";

export default function MainLayout() {
    return (
        <main className={ styles.mainLayout }>
            <SceneLayout>
                <ColorCube />
            </SceneLayout>
        </main>
    );
}