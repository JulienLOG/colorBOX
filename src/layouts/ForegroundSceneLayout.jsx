import styles from "../assets/styles/layouts/foregroundSceneLayout.module.scss";

export default function ForegroundSceneLayout({children}) {
  return <div className={ styles.foregroundSceneLayout }>{ children }</div>
};