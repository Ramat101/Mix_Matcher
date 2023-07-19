import "./header.scss";

function Header({ cms }) {
  return (
    <header>
      <h1>
        { cms.heading }
        <span className="header2">{ cms.subheading }</span>
      </h1>
    </header>
  );
}

export default Header;
