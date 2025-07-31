import styles from "../assets/styles/layouts/navCarousel.module.scss";
import CarouselButton from "../components/CarouselButton.jsx";


export default function NavCarousel() {
    const handleClick = () => console.log(`Button clicked`);

    return (
        <nav className={styles.navCarousel}>
            <CarouselButton color={'#003cff'} handleEvent={handleClick}/>
            <CarouselButton color={'#ff6a00ff'} handleEvent={handleClick}/>
        </nav>
    );
}