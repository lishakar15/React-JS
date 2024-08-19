import './App.css';

function App() {

  function handleGreetingChange()
  {
    const names = ["Steve","Jack","Hannah"];
    const randomIndex = Math.floor(Math.random()*names.length);
    console.log("val ==> "+names[randomIndex]);
    return names[randomIndex];
  };
  return (
    <div className="App">
      <h1> Hi {handleGreetingChange()}</h1>
    </div>
  );
}

export default App;
