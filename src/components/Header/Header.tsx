import s from './Header.module.scss';
import logo from '../../assets/svg/logo.svg'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className={s.header}>
            <div className="container">
                <nav className={s.header__navigation}>
                    <div className={s.header__logo}>
                        <Link to='/'>
                            <img src={logo} alt="Логотип" />
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header;