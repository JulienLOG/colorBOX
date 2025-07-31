import styles from "../assets/styles/layouts/sceneLayout.module.scss";

export default function SceneLayout({children}) {
  return <div className={ styles.sceneLayout }>{ children }</div>
};