import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import Igloos from './pages/Igloos/Igloos';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import { createBrowserHistory } from 'history';

const App = () => {
    const history = createBrowserHistory();

    return (
        <div>
            <Router history={history}>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/igloos">
                        Govno
                        <Igloos />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </div>
    );
};

export default App;
