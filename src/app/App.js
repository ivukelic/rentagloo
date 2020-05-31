import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Igloos from './pages/Igloos/Igloos';

const App = () => {
    return (
        <div>
            <Navigation />
            <Igloos />
        </div>
    );
};

export default App;
