import React, { Component } from "react";
import { getList } from "./ListFunctions";
import { NavLink } from "react-router-dom";

const link = { to: "/story/:id", label: "{item.title}" };

class Stories extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      title: "",
      description: "",
      editDisabled: false,
      items: []
    };
  }

  componentDidMount() {
    this.getAll();
  }

  getAll = () => {
    getList().then(data => {
      this.setState(
        {
          title: "",
          description: "",
          items: [...data]
        },
        () => {
          console.log(this.state.items);
        }
      );
    });
  };

  render() {
    return (
      <div>
        <h1 className="text-center">Stories</h1>


          <div>
          <ul
          className="list-group"
           style={{listStyleType: 'none'}}>
              {this.state.items.map((item, index) => (
                <li 
                key={index}
                className="list-group-item ">
                  <NavLink to={link.to}>{item.title}</NavLink>
                </li>
              ))
              }
            </ul>
          </div>
      </div>
    );
  }
}

export default Stories;
