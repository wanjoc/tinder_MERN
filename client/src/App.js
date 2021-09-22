import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import EditUser from './views/EditUser';
import NewUser from './views/NewUser';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Redirect exact from="/" to="/users/new" />
          <Route exact path="/users/new">
            <NewUser />
          </Route>

          {/* <Route exact path = "/users/:id">
            <User />
          </Route> */}

          <Route exact path="/users/:id/edit">
            <EditUser />
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
