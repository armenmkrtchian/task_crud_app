import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./Home";
import StoriesList from "./StoriesList";
import Story from "./Story";
import CreateStory from "./CreateStory";
import UpdateStory from "./UpdateStory";
import { NavLink } from "react-router-dom";
// import Layout from "./hoc/Layout";

const link1 = { to: "/stories"};
const link2 = { to: "/story-creator"};
const link3 = { to: "/story-update"};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      items: []
    };
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <NavLink to={'/'}>
          <div className="navbar-brand">
            Home
          </div>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/stories"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Stories
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <NavLink to={link1.to}>
                    <div className="dropdown-item">Stories</div>
                  </NavLink>
                  <NavLink to={link2.to}>
                    <div className="dropdown-item">Create Stories</div>
                  </NavLink>
                  <NavLink to={link3.to}>
                    <div className="dropdown-item">Update stories</div>
                  </NavLink>
                </div>
              </li>
            </ul>
          </div>
        </nav>

        <div className="container">
          <div className="row">
            <div className="col-md-12 mx-auto">
              <Switch>
                <Route path="/stories" component={StoriesList} />
                <Route path="/story-creator" component={CreateStory} />
                <Route path="/story-update" component={UpdateStory} />
                <Route path="/story/:id" component={Story} />
                <Route path="/" component={Home} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
