import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './assets/css/style.css';
import Navbar from './components/Navbar';
import ButtomNavbar from './components/BottomNavbar';
import Home from './components/Home';
import Search from './components/Search';
import Detail from './components/Detail';

const App = () => {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Navbar />
                <div id="content-container" className="container-fluid" style={{ marginTop: '70px' }}>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/search" component={Search} />
                        <Route exact path="/recipe/:id" component={Detail} />
                    </Switch>
                </div>
                <ButtomNavbar />
            </BrowserRouter>
        </React.Fragment>
    );
};

export default App;
