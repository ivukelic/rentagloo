import React from 'react';
import { Switch, Route } from 'react-router-dom';
import IglooCard from './components/IglooCard/IglooCard';
import Search from './components/Search/Search';
import Home from './pages/Home';
import Igloos from './pages/Igloos';
import About from './pages/About';

const App = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route>
                    <Igloos />
                </Route>
                <Route>
                    <About />
                </Route>
            </Switch>
        </div>
    );
};

export default App;
