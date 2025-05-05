import styles from './Header.module.css';
import logo from '../../img/logo-white.png';
import { Link } from 'react-router-dom';

export const Header = () => {

    return (
        <div className={styles.header}>
            <div className={styles.logobox}>
                <img src={logo} alt="Logo" className={styles.logo} />
            </div>
            <div className={styles.textBox}>
                <h1 className={styles.headingPrimary}>
                    <span className={styles.headingPrimaryMain}>Outdoors</span>
                    <span className={styles.headingPrimarySub}>is where life happens</span>
                </h1>

                <Link className={styles.btnWhite}>Discover our tours</Link>
            </div>
        </div>
    )
}
