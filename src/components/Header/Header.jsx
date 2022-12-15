import {NavLink} from "react-router-dom";
import scss from './Header.module.scss';

const Header = (props) => {
    return (
        <div className={scss.container}>
            <div className={scss.logo}>Logo</div>
            <div className={`${scss.link_item} ${scss.conventer_link}`}>
                <NavLink to={'/conventer'}>Conventer</NavLink>
            </div>
            <div className={`${scss.link_item} ${scss.currencies_link}`}>
                <NavLink to={'/currency'}>Currencies</NavLink>
            </div>
            <div className={scss.default_currency}>Default currency</div>
        </div>
    );
}

export default Header;