import logo from './panda.png';
import './App.css';
import loading from './loadingg.gif';
import Output from './Output';
import { useState,useEffect } from 'react';

function Header() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <img src={loading} className="loading" alt="loading" />
    </header>
  )
}

function App() {
  const [message, setMessage] = useState(true);

  useEffect(() => {
    // Set a timeout to change the message after 3 seconds
    const timer = setTimeout(() => {
      setMessage(false);
    }, 5000);

    // Cleanup function to clear the timeout if the component unmounts
    //return () => clearTimeout(timer);
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div className="App">
        {message?<Header/>:<Output/>}
    </div>
  );
}

export default App;