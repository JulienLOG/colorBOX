import styles from "../assets/styles/layouts/backgroundSceneLayout.module.scss";

export default function BackgroundSceneLayout({ children }){
    return (
        <div className={styles.backgroundSceneLayout}>{ children }</div>
    );
};