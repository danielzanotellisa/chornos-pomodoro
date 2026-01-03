import styles from './styles.module.css';

type LogoProps = {
    children: React.ReactNode
}

export function Logo({children}: LogoProps) {
    return <>
        <div className={styles.logo_wrapper}>
            {children}
        </div>
    </>
}