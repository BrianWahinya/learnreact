import NavBar from './components/navbar';
import Counters from './components/counters';
import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <main className='container'>
        <Counters />
      </main>    
    </>
  );
}

export default App;
