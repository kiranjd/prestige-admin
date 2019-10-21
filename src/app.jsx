import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./containers/home";
import Shops from "./containers/shops";
class App extends Component {
  state = {
    location: "home",
    name: ""
  };
  componentDidMount() {
    this.setState({
      location: window.location.href.split("/")[
        window.location.href.split("/").length - 1
      ],
      name: "home"
    });
  }
  getClass = name => {
    this.setState({
      name
    });
  };
  render() {
    return (
      <main className="app">
        <nav className="navbar">navbar</nav>
        <aside className="sidebar">
          <ul>
            <li>
              <img src="" alt="" />
            </li>
            <li
              name="home"
              className={
                this.state.location === this.state.name ? "active" : ""
              }
              onClick={e => this.getClass("home")}
            >
              Home
            </li>
            <li
              name="banners"
              className={
                this.state.location === this.state.name ? "active" : ""
              }
              onClick={e => this.getClass("banners")}
            >
              Banners
            </li>
            <li
              name="shops"
              className={
                this.state.location === this.state.name ? "active" : ""
              }
              onClick={e => this.getClass("shops")}
            >
              Shops
            </li>
            <li
              name="offers"
              className={
                this.state.location === this.state.name ? "active" : ""
              }
              onClick={e => this.getClass("offers")}
            >
              Offers
            </li>
            <li
              name="events"
              className={
                this.state.location === this.state.name ? "active" : ""
              }
              onClick={e => this.getClass("events")}
            >
              Events
            </li>
            <li
              name="help"
              className={
                this.state.location === this.state.name ? "active" : ""
              }
              onClick={e => this.getClass("help")}
            >
              Help
            </li>
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
