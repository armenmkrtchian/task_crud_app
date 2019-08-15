import React, { Component } from "react";
import { getList } from "./ListFunctions"

class Story extends Component {
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
    
    render() { 
        return ( 

           <h1>Story

              
           </h1>

        //     <table className="table">
        //     <tbody>
        //         {this.state.items.map((item, index) => (
        //             <tr key={index}>
                        
        //                    <td className="text-left">{item.title}</td>
                          
                        
        //                 <td className="text-right">
                          
                          
        //                 </td>
        //             </tr>
        //         ))}
        //     </tbody>
        // </table>
         );
    }
}
 
export default Story;