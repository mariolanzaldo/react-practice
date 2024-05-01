// import styles from "../styles.module.css";


type Options = {
    value: string;
    size?: "small" | "medium" | "large";
}

function Header({value}: Options) {
    // const headerSize: string = "header-size"+size;

    return (
        <div
            // className={`styles["header-size"]${styles.size}`}
        >
            {value}
        </div>
    )
}

export default Header;

