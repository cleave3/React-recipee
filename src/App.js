import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './assets/css/style.css';
import Navbar from './components/Navbar';
import ButtomNavbar from './components/BottomNavbar';
import Home from './components/Home';
import Search from './components/Search';
import Detail from './components/Detail';

const App = () => {
    return (
        <Router>
            <React.Fragment>
                <Navbar />
                <Switch>
                    <div id="content-container" className="container-fluid" style={{ marginTop: '70px' }}>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/search" component={Search} />
                        <Route exact path="/recipe/:id" component={Detail} />
                    </div>
                </Switch>
                <ButtomNavbar />
            </React.Fragment>
        </Router>
    );
};

export default App;
