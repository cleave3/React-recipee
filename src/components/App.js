import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../store';
import Navbar from './layout/Navbar';
import Index from './layout/Index';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <React.Fragment>
                        <Navbar />
                        <div className="container">
                            <Switch>
                                <Route exact path="/" component={Index} />
                            </Switch>
                        </div>
                    </React.Fragment>
                </Router>
            </Provider>
        );
    }
}

export default App;
