import styles from "../styles.module.css";

type MenuItem = {
    icon?: HTMLImageElement;
    title: string;
    badge: string;
}

function MenuItem({ icon, title, badge }: MenuItem) {
    console.log(icon);
    return (
        <div
            className={styles.drawerItem}
        >
            <div>
            {/* {icon ?? null} */}
            <span>{title}</span>
            </div>
            {/* <span>{badge}</span> */}
            {badge ? <span>{badge}</span>: null}
        </div>
    )
}

export default MenuItem;