import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./containers/home";
import Shops from "./containers/shops";
import Offers from "./containers/Offers";
import Help from "./containers/Help";
import Navbar from "./components/Navbar";

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
        <Navbar />
        <aside className="sidebar">
          <ul>
            <li>
              <img src="" alt="" />
            </li>
            <li>Home</li>
            <li className="active">Banners</li>
            <li>Shops</li>

            <li>Events</li>
            <li>Help</li>
          </ul>
        </aside>
        <div className="content">
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route path="/shops" component={Shops} />
            <Route path="/offers" component={Offers} />
            <Route path="/help" component={Help} />
            <Redirect from="/" to="/home" />
          </Switch>
        </div>
      </main>
    );
  }
}

export default App;
