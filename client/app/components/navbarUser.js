import React from 'react';
import { Link } from 'react-router'
import {getUserData} from '../server'

export default class NavbarUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: []
    };
  }

  componentDidMount() {
    getUserData(this.props.user, (userData) => {
      this.setState(userData);
    });
  }

  render() {
    return (
      <div>
        <Link to={"/profile/" + this.state._id} query={{user:this.state._id}}>
          <button type="button" className="btn btn-default navbar-btn">
            <span className="glyphicon glyphicon-user"></span>
            {this.state.username}
          </button>
        </Link>
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
