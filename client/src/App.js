-import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import EditUser from './views/EditUser';
import NewUser from './views/NewUser';
import LoginUser from './views/LoginUser';
import Dashboard from './views/Dashboard';

import './App.css';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Redirect exact from="/" to="/users/new" />

                    <Route exact path="/users/new">
                        <NewUser />
                    </Route>

                    <Route exact path="/users/login">
                        <LoginUser />
                    </Route>

                    <Route exact path="/users">
                        <Dashboard />
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