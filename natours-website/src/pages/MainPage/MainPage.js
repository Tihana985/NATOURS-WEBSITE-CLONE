import styles from './MainPage.module.css';
import { Header } from '../../components/header/Header';

export const MainPage = () => {

    return (
        <div className={styles.mainpage}>
            <Header />
        </div>
    )
}