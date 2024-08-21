import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header_nav_item}>
      <Link to={'/pokemons'}>Pokemons</Link>
      </div>
    </div>
  )
}

export default Header