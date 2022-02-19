import React, {Component} from 'react';

class NavBar extends React.Component {
  render(){
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Total: {this.props.totalProducts()}</a>
        </div>
      </nav>
    )
  }

}

export default NavBar;