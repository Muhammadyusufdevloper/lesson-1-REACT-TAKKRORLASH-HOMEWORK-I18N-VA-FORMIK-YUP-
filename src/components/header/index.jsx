import { useTranslation } from "react-i18next";
import logo from "../../assets/logo.svg";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    const { t, i18n } = useTranslation();

    return (
        <>
            <header className="bg-white py-2">
                <nav className="max-w-[1170px] px-4 mx-auto w-full flex items-center justify-between">
                    <Link to={"/"}>
                        <img src={logo} alt="site logo img" />
                    </Link>
                    <ul className="flex items-center gap-[30px]">
                        <li>
                            <NavLink to={"/services"}>
                                {t('services')}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/about"}>
                                {t('about')}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/contacts"}>
                                {t('contacts')}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/login'}>
                                {t('login')}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/register'}>
                                {t('open-an-account')}
                            </NavLink>
                        </li>
                        <li>
                            <select onChange={e => i18n.changeLanguage(e.target.value)} className="outline-none">
                                <option hidden selected>Tilni tanlang</option>
                                <option value="en">en</option>
                                <option value="uz">uz</option>
                            </select>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header;
