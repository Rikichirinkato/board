import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.scss';
import Main from './components/main-page/main-component';
import Board from './components/board/board';
import Thread from './components/thread/thread';

export default function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/anime">a/</Link>
          </li>
          <li>
            <Link to="/random">b/</Link>
          </li>
          <li>
            <Link to="/music">mu/</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/anime">
            <Board  header='Anime' />
          </Route>
          <Route path="/random">
            <Board header='B' />
          </Route>
          <Route path="/music">
            <Board header='Music' />
          </Route>
          <Route path="/thread/:originalPost">
            <Thread />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}
  