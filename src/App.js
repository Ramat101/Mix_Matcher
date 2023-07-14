import CMS from 'CMS';
import Header from "components/header";
import Main from "components/main";
import "./App.scss";

function App() {
  return (
    <div className="app-container">
      <section>
        <Header cms={CMS.header} />
      </section>
      <section className="mainSection">
        <Main cms={CMS.main} />
      </section>
    </div>
  );
}

export default App;
