import styles from "../assets/styles/layouts/mainLayout.module.scss";
import CarouselButton from "../components/CarouselButton.jsx";
import SceneLayout from "./SceneLayout";
import ColorCube from "../components/ColorCube";

export default function MainLayout() {
    const handleClick = () => console.log(`Button clicked`);

    return (
        <main className={ styles.mainLayout }>
            <CarouselButton color={'#003cff'} handleEvent={handleClick}/>
            <CarouselButton color={'#ff6a00ff'} handleEvent={handleClick}/>
            <SceneLayout>
                <ColorCube />
            </SceneLayout>
        </main>
    );
}