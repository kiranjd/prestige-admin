import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./containers/home";
import Shops from "./containers/shops";
class App extends Component {
  state = {
    location: "home"
  };
  componentDidMount() {
    this.setState({
      location: window.location.href.split("/")[
        window.location.href.split("/").length - 1
      ]
    });
  }
  render() {
    return (
      <main className="app">
        <nav className="navbar">navbar</nav>
        <aside className="sidebar">
          <ul>
            <li>
              <img src="" alt="" />
            </li>
            <li>Home</li>
            <li className="active">Banners</li>
            <li>Shops</li>
            <li>Offers are rare</li>
            <li>Events</li>
            <li>Help</li>
          </ul>
        </aside>
        <div className="content">
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route path="/shops" component={Shops} />
            <Redirect from="/" to="/home" />
          </Switch>
        </div>
      </main>
    );
  }
}

export default App;
