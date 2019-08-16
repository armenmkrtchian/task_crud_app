import React, { Component } from "react";


class Story extends Component {
    // componentDidMount() {
    //     this.getAll();
    //     console.log("Story ID:", this.props.match.params.id)
    //   }
    
    render() { 
        return ( 

            <div className="card">
            <div className="card-header">
            Some beautiful story...
            </div>
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="/stories" className="btn btn-primary">Go to stories</a>
            </div>
          </div>

         );
    }
}
 
export default Story;