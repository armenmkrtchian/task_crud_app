import React, { Component } from 'react'

import List from './List'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            term: '',
            items: []
        }
    }

    /*componentDidMount() {
    getList().then(data => {
      //console.log(data);

      this.setState({
        items: [...this.state.items, ...data]
      });
    });
  }*/

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">CRUD App</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                        <a className="nav-item nav-link active" href="/">Stories <span class="sr-only">(current)</span></a>
                        
                        </div>
                    </div>
               </nav>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 mx-auto">
                                <h1 className="text-center">Create your story</h1>
                                <List />
                            </div>
                        </div>
                    </div>
            </div>
           
        )
    }
}

export default App
