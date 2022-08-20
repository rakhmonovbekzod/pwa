import Link from "next/link";
import { useTranslation } from "react-i18next";
import { Button, Input } from "../../Form";

const Header = () => {

    const { t, i18n } = useTranslation()

    const changeLanguage = (evt) => {
        i18n.changeLanguage(evt.target.value)
    }

    return <>
        <header className="header navbar-expand-lg navbar-light bg-light" >
            <div className="container ">
                <nav className="navbar  ">
                    <a className="navbar-brand" href="#">{t('Navbar')}</a>
                    <Button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </Button>

                    <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link href="/">
                                    <a className="nav-link" >{t('Home')} <span className="sr-only">{t('current')}</span></a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/">
                                    <a className="nav-link" >{t('Link')}</a>
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {t('Dropdown')}
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">{t('Action')}</a>
                                    <a className="dropdown-item" href="#">{t('Another action')}</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">{t('Something else here')}</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#">{t('Disabled')}</a>
                            </li>

                        </ul>
                        <select className="form-control language_select" onChange={changeLanguage}>
                            <option value="uz" selected>Uzbek</option>
                            <option value="eng">English</option>
                        </select>
                        <form className="d-flex form-inline my-2 my-lg-0" onSubmit={(e) => e.preventDefault()}>
                            <Input className="form-control mr-sm-2 " type="search" placeholder={t('Search')} aria-label="Search" />
                            <Button className="btn btn-outline-success my-2 my-sm-0 ml-20" type="submit" text={t('Search_btn')} />
                        </form>
                    </div>
                </nav>
            </div>
        </header >
    </>
}

export default Header;