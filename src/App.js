import { useLoaderData } from 'react-router-dom';
import Header from "components/header";
import Main from "components/main";
import "./App.scss";

function App() {
  const { CMS } = useLoaderData();

  return (
    <div className="appContainer">
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
