import "./header.scss";

const Header = ({ cms }) => (
  <header>
    <h1>
      { cms.heading }
      <span className="header2">{ cms.subheading }</span>
    </h1>
  </header>
);

export default Header;
