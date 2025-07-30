import styles from "../assets/styles/components/linkItem.module.scss";
import { NavLink } from "react-router";

export default function LinkItem({path, name}) {

    return (
        <li className={ styles.linkItem }>
            <NavLink to={ path }>{ name }</NavLink>
        </li>
    );
};