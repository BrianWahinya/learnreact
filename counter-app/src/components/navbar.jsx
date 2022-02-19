import React, {Component} from 'react';

// Method 1
// Class
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

/*
// Method 2
// Stateless Functional Components
const NavBar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Total: {props.totalProducts()}</a>
      </div>
    </nav>
  )
}
*/

export default NavBar;