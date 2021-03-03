import React from 'react'
import './App.css';
import {BrowserRouter, Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Comics from './components/Comics';
import Publish from './components/Publish';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/comics" component={Comics} exact={true} />
          <Route path="/publishing" component={Publish} exact={true} />
        </Switch>
        {/* <Comics />
        <Novels />
        <Mature />
        <Creators />
        <About />
        <Newsfeed /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
