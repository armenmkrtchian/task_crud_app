import React, { Component } from "react";
import { getList, addItem, deleteItem, updateItem } from "./ListFunctions";
import { NavLink } from "react-router-dom";

const link = { to: "/stories", label: "{item.title}" };

class CreateStory extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      title: "",
      description: "",
      arttitle: "",
      artbody: "",
      editDisabled: false,
      items: []
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    this.getAll();
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

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

  onSubmit = e => {
    e.preventDefault();
    addItem(this.state.title, this.state.description).then(() => {
      this.getAll();
    });
    this.setState({
      title: "",
      description: ""
    });
  };

  onUpdate = e => {
    e.preventDefault();
    updateItem(this.state.title, this.state.id, this.state.description).then(
      () => {
        this.getAll();
      }
    );
    this.setState({
      editDisabled: ""
    });
  };

  onEdit = (itemid, e) => {
    e.preventDefault();

    var data = [...this.state.items];
    data.forEach((item, index) => {
      if (item.id === itemid) {
        this.setState({
          id: item.id,
          title: item.title,
          description: item.description,
          editDisabled: true
        });
      }
    });
  };

  onDelete = (val, e) => {
    e.preventDefault();
    deleteItem(val);

    var data = [...this.state.items];
    data.filter(function(item, index) {
      if (item.id === val) {
        data.splice(index, 1);
      }
      return true;
    });
    this.setState({ items: [...data] });
  };

  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card card-default">
            <div className="card-header">
              <div className="card-body">
                <h1>Create story</h1>
                  <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                      <label htmlFor="title" />
                      <div className="row">
                        <div className="col-md-12">
                          <input
                            type="text"
                            className="form-control"
                            id="title"
                            placeholder="Title"
                            name="title"
                            value={this.state.title || ""}
                            onChange={this.onChange.bind(this)}
                          />
                        </div>

                        <div className="col-md-12">
                          <textarea
                            name="description"
                            id="description"
                            placeholder="Description"
                            value={this.state.description || ""}
                            className="form-control"
                            onChange={this.onChange.bind(this)}
                          />
                        </div>
                      </div>
                    </div>
                    
                      <button
                        type="submit"
                        onClick={this.onSubmit.bind(this)}
                        className="btn btn-light btn-block-sm"
                      >
                          <NavLink to={link.to}>Submit</NavLink>
                      </button>
                   
                    
                  </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateStory;
