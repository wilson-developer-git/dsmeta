import logo from '../../assets/img/logo.svg';

import './styles.css';

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                <h1>DS - Metas de vendas</h1>
                <p>
                    Desenvolvido por
                    <a href="https://www.instagram.com/wilson_developer"> @wilson_developer</a>
                </p>
            </div>
        </header>
    )
}

export default Header;