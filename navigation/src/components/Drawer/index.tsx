import styles from "../styles.module.css";

type DrawerItem = {
    icon?: HTMLImageElement;
    title: string;
    badge: string;
}

function Drawer({ icon, title, badge }: DrawerItem) {
    console.log(icon);

    return (
        <div
            className={styles.drawerItem}
        >
            
            <span>{title}</span>
            <span>{badge}</span>
        </div>
    )
}

export default Drawer;