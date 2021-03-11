import React from 'react'
import './App.css';
import {BrowserRouter, Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Comics from './components/Comics';
import Publish from './components/Publish';
import Dashboard from './components/Dashboard';
import Novels from './components/Novels';
import UploadComicPage from './components/UploadComicPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/comics" component={Comics} exact={true} />
          <Route path="/novels" component={Novels} exact={true} />
          <Route path="/publishing" component={Publish} exact={true} />
          <Route path="/dashboard" component={Dashboard} exact={true} />
          <Route path="/dashboard/upload/comic" component={UploadComicPage} exact={true} />
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
