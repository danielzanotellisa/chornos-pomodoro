import styles from  './Heading.module.css';

export function HeadingComponent(props) {
    return (<>
        <h1 className={styles.heading}>{props.children}</h1>
    </>);
}