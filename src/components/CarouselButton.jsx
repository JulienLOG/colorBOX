import styles  from "../assets/styles/components/carouselButton.module.scss";

export default function CarouselButton({color, handleEvent}) {
    return (
        <div className={styles.carouselButton}>
            <div style={{ backgroundColor : color }}></div>
            <button onClick={ handleEvent }></button>
        </div>
    );
};