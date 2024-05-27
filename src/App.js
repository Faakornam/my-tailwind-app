// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Admission from './pages/Admission';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />

        {/* Main content */}
        <main className="flex-grow">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/programs" component={Programs} />
            <Route path="/admission" component={Admission} />
          </Switch>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
