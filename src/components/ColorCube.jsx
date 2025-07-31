import styles from '../assets/styles/components/colorCube.module.scss';

export default function ColorCube() {
  return (
    <div className={styles.colorCube}>
        
        <div className={`${styles.face} ${styles.faceTOP}`}>1</div>
        <div className={`${styles.face} ${styles.faceBOTTOM}`}>2</div>
        <div className={`${styles.face} ${styles.faceLEFT}`}>3</div>
        <div className={`${styles.face} ${styles.faceRIGHT}`}>4</div>
        <div className={`${styles.face} ${styles.faceFRONT}`}>5</div>
        <div className={`${styles.face} ${styles.faceBACK}`}>6</div>
    </div>
  );
}