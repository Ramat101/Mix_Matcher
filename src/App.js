import { useLoaderData } from 'react-router-dom';
import { CMSProvider } from 'common/CMS';
import Header from "components/header";
import Main from "components/main";
import "./App.scss";

function App() {
  const { CMS } = useLoaderData();

  return (
    <CMSProvider value={CMS}>
      <div className="appContainer">
        <section>
          <Header />
        </section>
        <section className="mainSection">
          <Main />
        </section>
      </div>
    </CMSProvider>
  );
}

export default App;
