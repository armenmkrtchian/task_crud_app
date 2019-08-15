import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./Home";
import Stories from "./Stories";
import Story from "./Story"
import CreateStory from "./CreateStory";
import UpdateStory from "./UpdateStory";
// import Layout from "./hoc/Layout";

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
          <a className="navbar-brand" href="/">
            Home
          </a>
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
                <a className="dropdown-item" href="/stories">
                    Stories
                  </a>
                  <a className="dropdown-item" href="/story-creator">
                    Create Stories
                  </a>
                  <a className="dropdown-item" href="/story-update">
                    Update stories
                  </a>
                </div>
              </li>
              
            </ul>
          </div>
        </nav>

        <div className="container">
          <div className="row">
            <div className="col-md-12 mx-auto">
              <h1 className="text-center">CRUD App</h1>
              <Switch>
                <Route path="/stories" component={Stories} />
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
