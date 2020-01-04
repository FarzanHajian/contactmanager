import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Contacts from './components/Contacts';
import Header from './components/Header'
import AddContact from './components/AddContact';
import EditContact from './components/EditContact';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import { Provider } from 'react-redux'
import store from './redux_stuffs/store'

function App() {

  return (
    <Provider store={store}>
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Header branding="Contact Manager" />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/contact/add" component={AddContact} />
              <Route exact path="/contact/edit/:id" component={EditContact} />
              <Route exact path="/contact/:searchname" component={Contacts} />
              <Route exact path="/about" component={About} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
