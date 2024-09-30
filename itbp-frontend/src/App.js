// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Users from './pages/Users';
import Incidents from './pages/Incidents';
import Equipment from './pages/Equipment';
import Login from './components/Login';
import Register from './components/Register';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <ProtectedRoute path="/users" component={Users} />
        <ProtectedRoute path="/incidents" component={Incidents} />
        <ProtectedRoute path="/equipment" component={Equipment} />
        <Redirect to="/login" /> {/* Redirect unauthorized users to login */}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;