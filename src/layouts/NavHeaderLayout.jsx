import styles from "../assets/styles/layouts/navHeaderLayout.module.scss";
import LinkItem from "../components/LinkItem.jsx";
import { paths } from "../routes.js";

export default function NavHeaderLayout() {

    return (
        <nav className={styles.navHeaderLayout}>
            <ul>
                { paths.map((item, index) => <LinkItem key={index} path={item.path} name={item.name} /> )}
            </ul>
        </nav>
    );
};