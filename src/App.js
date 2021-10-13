import {
    Route,
    Switch
} from 'react-router-dom';
import {useEffect, useState} from "react";
import {getCurrentUser, logout} from "./util/APIUtils";
import AppHeader from "./common/AppHeader";
import Home from "./home/Home";
import PrivateRoute from "./common/PrivateRoute";
import Profile from "./user/profile/Profile";
import Login from "./user/login/Login";
import './App.css';
import Signup from "./user/signup/Signup";
import NotFound from "./common/NotFound";
import OAuth2RedirectHandler from "./user/oauth2/OAuth2RedirectHandler";
import test2 from "./page/test2";
import PopUp from "./page/PopUp";
import Writepage from "./page/Writepage";

function App() {

    const [authenticated, setAuthenticated] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);

    const setAfterLogin = (currentUser, authenticated) => {
        setCurrentUser(currentUser);
        setAuthenticated(authenticated);
    }

    const handleLogout = () => {
        setAuthenticated(false);
        setCurrentUser(null);
        logout()
            .then(() => alert("You're safely logged out!"))
            .catch(alert);
    }

    const loadCurrentlyLoggedInUser = () => {
        getCurrentUser()
            .then(response => {
                return response.json()
            })
            .then(json => {
                setCurrentUser(json);
                setAuthenticated(true);
            })
    }

    useEffect(() => {
        loadCurrentlyLoggedInUser();
    }, [])

    return (
        <div className="app">
            <div className="app-top-box">
                <AppHeader authenticated={authenticated} onLogout={handleLogout}/>
            </div>
            <div className="app-body">
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/location" component={test2}/>
                    <Route exact path="/write" component={Writepage}/>
                    <PrivateRoute path="/profile" authenticated={authenticated}
                                  currentUser={currentUser}
                                  component={Profile}
                    />
                    <Route path='/login'
                           render={
                               (props) =>
                                   <Login authenticated={authenticated}
                                          setAfterLogin={setAfterLogin}
                                          {...props}
                                   />
                           }
                    />
                    <Route path='/signup'
                           render={
                               (props) =>
                                   <Signup authenticated={authenticated}
                                           {...props}
                                   />
                           }
                    />
                    <Route path="/oauth2/redirect"
                           render={
                               (props) =>
                                   <OAuth2RedirectHandler setAfterLogin={setAfterLogin}
                                                          {...props}
                                   />
                           }
                    />
                    <Route component={NotFound}/>
                </Switch>
            </div>
        </div>
    );
}

export default App;
