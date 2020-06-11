import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Igloos from './pages/Igloos/Igloos';
import Footer from './components/Footer/Footer';

const App = () => {
    return (
        <div>
            <Navigation />
            <Igloos />
            <Footer />
        </div>
    );
};

export default App;
