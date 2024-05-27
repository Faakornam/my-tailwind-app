import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Programs from './pages/Programs';
import { Switch } from 'react-router-dom';
import Admission from './pages/Admission';

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
            <Route path = '/contact' component={Contact}/>
          </Switch>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
