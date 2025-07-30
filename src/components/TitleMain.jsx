import styles from "../assets/styles/components/titleMain.module.scss";

export default function TitleMain({ title, showText = false, text }) {
    return (
        <div className={ styles.titleMain }>
            <h1>{ title }</h1>
            { showText && <p>{ text }</p> }
        </div>
    );
};