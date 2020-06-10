import React, { Component } from 'react';
import './App.css';
import { Home, About, Board, Nav, Footer } from './components'
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
    render() {

        return (
            <div className="App">
                <BrowserRouter basename={process.env.PUBLIC_URL}>
                    <Nav />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/board" component={Board} />
                    <Footer />
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
