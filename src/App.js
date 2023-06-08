import Header from "components/header";
import Main from "components/main";
import "./App.scss";

function App() {
  return (
    <div className="app-container">
      <section>
        <Header />
      </section>
      <section>
        <Main />
      </section>

    </div>
  );
}

export default App;
