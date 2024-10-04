import { useEffect } from 'react';
import './App.css';
import PrivacyPolicy from './Privacy';

function App() {
  useEffect(() => {
    if (window.location.pathname !== '/') {
      return (window.location = '/');
    }
  }, []);

  return (
    <div className='App'>
      <PrivacyPolicy />
    </div>
  );
}

export default App;
