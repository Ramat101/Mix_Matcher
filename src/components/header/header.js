import logo from './logo.svg';
import './header.css';

function Header() {
    return (
      <header className="App-header">
        <h1>SMOOTHIES <span>GET CREATIVE</span></h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    );
}

export default Header;