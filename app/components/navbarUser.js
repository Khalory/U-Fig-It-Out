import React from 'react';
import { Link } from 'react-router'

export default class NavbarUser extends React.Component {
  render() {
    return (
      <div>
        <button type="button" className="btn btn-default navbar-btn">
          <span className="glyphicon glyphicon-user"></span>
          <Link to={"/profile/" + this.props.user}>{this.props.name}</Link>
        </button>
        <div className="btn-group" role="group">
          <button type="button" className="btn btn-default navbar-btn dropdown-toggle"
            data-toggle="dropdown">
            <span className="caret"></span>
          </button>
          <ul className="dropdown-menu">
            <li><a href="#">Request an Item!</a></li>
            <li><a href="#">Log out...</a></li>
          </ul>
        </div>
      </div>
    );
  }
}
