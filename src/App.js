// import { useEffect } from 'react';
import './App.css';
import PrivacyPolicy from './Privacy';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './Home';

function App() {
  // useEffect(() => {
  //   if (window.location.pathname !== '/') {
  //     return (window.location = '/');
  //   }
  // }, []);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/privacy-policy'>Privacy Policy</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/privacy-policy' component={PrivacyPolicy} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
