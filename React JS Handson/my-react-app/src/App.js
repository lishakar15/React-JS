import './App.css';
import Header from './Header';

function App() {

  function handleGreetingChange()
  {
    const names = ["Steve","Jack","Hannah"];
    const randomIndex = Math.floor(Math.random()*names.length);
    return names[randomIndex];
  };
  return (
    <div className="App">
      <h1> Hi {handleGreetingChange()}</h1>
      <Header />
    </div>
  );

}

export default App;
