import Header from 'components/header';
import './App.css';

function App() {
  function HomePage() {
    const fruits = ['Apple', 'Bannana', 'Kiwi'];

    function handleClick() {
        console.log('Favorite fruit selected');
    }

    return (
        <>
            <div>
                <Header title="What's your favorite fruit??" />
            </div>
            <ul>
                { fruits.map(fruit => <li key={Math.random() * 100}>{fruit}</li>) }
            </ul>
            <button onClick={handleClick}>Like</button>
        </>
    );
}

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
