import axios from 'axios';
import './App.css';

function App() {

  const apiCall = async () => {
    axios.get('http://localhost:8080/').then(() => {
      console.log('API Call Successful');
    })
  }

  return (
    <div className="App">
      <header className="App-header">

        <button onClick={apiCall}>Make API Call</button>
       
      </header>
    </div>
  );
}

export default App;
