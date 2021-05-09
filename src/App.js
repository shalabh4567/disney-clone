import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Details from "./components/Details";
import Login from "./components/Login";
import { selectUserName } from "./features/user/userSlice"
import { useSelector } from "react-redux";


function App() {

  const user = useSelector(selectUserName)
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/detail/:id">
            <Details />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
