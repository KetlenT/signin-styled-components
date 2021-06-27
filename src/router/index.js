import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';

function Routers() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact component={SignIn} />
                    <Route path="/signin" exact component={SignIn} />
                    <Route path="/signup" exact component={SignUp} />
                </Switch>
            </div>
        </Router>
    );
}

export default Routers;