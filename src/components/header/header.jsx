import { useContext } from "react";
import { CMSContext } from "common/CMS";

import "./header.scss";

function Header() {
  const { header: cms } = useContext(CMSContext);

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
