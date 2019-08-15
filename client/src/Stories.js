import React, { Component } from "react";
import { getList, addItem, deleteItem, updateItem } from "./ListFunctions";
import {NavLink} from 'react-router-dom';

 const link = {to: '/story/:id', label: '{item.title}'}
class Stories extends Component {
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
      <div>
                                <h1 className="text-center">Stories</h1>



                                <table className="table">
                    <tbody>
                        {this.state.items.map((item, index) => (
                            <tr key={index}>
                                
                                <NavLink
                                  to={link.to}
                                >
                                   <td className="text-left">{item.title}</td>
                                   {link.label}
                                </NavLink>
                                <td className="text-right">
                                    <a
                                        href="/"
                                        
                                        disabled={this.state.editDisabled}
                                        onClick={this.onEdit.bind(
                                            this,
                                            item.id
                                        )}
                                    >
                                      <NavLink></NavLink>
                                        Read
                                    </a>
                                  
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                                
{/* 
                                
                                    {this.state.items.map((item, index) => (
                                    
                                    
                                        <div>
                                <div id="accordion"
                                        key={index}
                                        >
                                <div className="card">
                                    <div className="card-header" id="headingOne">
                                    <h5 className="mb-0">
                                        <button
                                        className="btn btn-link"
                                        data-toggle="collapse"
                                        data-target="#collapseOne"
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                        href=""
                                        className="btn btn-light "
                                        disabled={this.state.editDisabled}
                                        onClick={this.onEdit.bind(this, item.id)}
                                        >
                                        {item.title}
                                        </button>
                                    </h5>
                                    </div>
                                </div>
                                </div>

                                <div
                                id="collapseOne"
                                className="collapse show"
                                aria-labelledby="headingOne"
                                data-parent="#accordion"
                                >
                                <div className="card-body">
                                {item.description}
                                </div>
                                </div>
                                </div>
                        ))}



                                //           {/* <button
                                //             href=""
                                //             className="btn btn-light "
                                //             disabled={this.state.editDisabled}
                                //             onClick={this.onEdit.bind(this, item.id)}
                                //           >
                                //             {item.title}
                                //           </button>
                                //           <div className="card-body">
                                //    {item.description}
                                //     </div> */}
                                    
                                     
          
        
    </div>
    );
  }
}

export default Stories;
