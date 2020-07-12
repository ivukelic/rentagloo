import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import Igloos from 'Pages/Igloos/Igloos';
import Footer from 'Components/Footer/Footer';
import Home from 'Pages/Home/Home';
import About from 'Pages/About/About';
import { createBrowserHistory } from 'history';
import Data from 'Assets/Data/Data.json';
import Navigation from 'Components/Navigation/Navigation';
import { TranslationProvider } from 'Components/Translation/TranslationProvider';
import Stylesguide from 'Pages/Styleguide/Styleguide';
import NotFound from 'Pages/NotFound/NotFound';
import Contact from 'Pages/Contact/Contact';

const App = () => {
    const history = createBrowserHistory();

    return (
        <div>
            <TranslationProvider>
                <Router history={history}>
                    <Navigation />
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/igloos">
                            <Igloos igloos={Data.igloos} />
                        </Route>
                        <Route exact path="/about">
                            <About />
                        </Route>
                        <Route exact path="/contact">
                            <Contact />
                        </Route>
                        <Route exact path="/styleguide">
                            <Stylesguide />
                        </Route>
                        <Route exact path="/fishpoints">
                            <NotFound />
                        </Route>
                        <Route exact path="/random">
                            <NotFound />
                        </Route>
                        <Route exact path="/reservation">
                            <NotFound />
                        </Route>
                    </Switch>
                    <Footer />
                </Router>
            </TranslationProvider>
        </div>
    );
};

export default App;
