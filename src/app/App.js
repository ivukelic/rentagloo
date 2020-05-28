import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import IglooCard from './components/IglooCard/IglooCard';
import Search from './components/Search/Search';
import Home from './pages/Home';
import Igloos from './pages/Igloos';
import About from './pages/About';
import Navigation from './components/Navigation/Navigation';

const App = () => {
    return (
        <Router>
            <Navigation />
            <Switch>
                <Route exact path="/">
                    <Home />
                    {/* TO DO : fix this router thing */}
                </Route>
                <Route exact path="/igloos">
                    <Igloos />
                </Route>
                <Route exact path="/about">
                    <About />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
