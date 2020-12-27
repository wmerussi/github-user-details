import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import Search from './views/Search';
import SearchHistory from './views/SearchHistory';

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Search</Link>
            </li>
            <li>
              <Link to='/search-history'>History</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path='/'>
            <Search />
          </Route>
          <Route exact path='/search-history'>
            <SearchHistory />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
