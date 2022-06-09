import logo from './logo.svg';
import './App.css';
import Data from './data';
import Riddles from './riddles';

function App() {

  const Riddlers = Riddles.map(riddle=>{
    return(
        <Data 
        key={riddle.id}
        riddle={riddle}/>
    )
})
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    <section>{Riddlers}</section>
    </div>
  );
}

export default App;
