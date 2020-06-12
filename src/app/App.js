import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Igloos from './pages/Igloos/Igloos';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';

const App = () => {
    return (
        <div>
            <Home />
            <Footer />
        </div>
    );
};

export default App;
