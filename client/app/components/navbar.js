import React from 'react'
import {Link} from 'react-router';

import NavbarUser from './navbarUser.js'

export default class Navbar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: this.props.searchText
    }
  }

  onChange(e) {
    this.setState({
      value: e.target.value
    })
  }

  render() {
    return (
      <nav className="navbar navbar-fixed-top navbar-default">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link to={"/main/" + this.props.user} className="navbar-brand">
              <span className="glyphicon glyphicon-home"></span>
            </Link>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <form className="navbar-form navbar-left" role="search">
              <div className="input-group">
                <input type="text" className="form-control fig-search" placeholder="Search UFig" value={this.state.value} onChange={this.onChange.bind(this)} />
                <span className="input-group-btn">
                  <Link to={"/search/" + this.props.user} query={{category:this.props.category, searchText:this.state.value}}>
                    <button type="submit" className="btn btn-default">
                      <span className="glyphicon glyphicon-search"></span>
                    </button>
                  </Link>
                </span>
              </div>
            </form>
            <div className="nav navbar-nav navbar-right">
              <Link to={"/make_listing/" + this.props.user} query={{id:this.props.user}} className="slightUp">
                <button type="button" className="btn btn-default navbar-btn">
                  <li>Sell an item!</li>
                </button>
              </Link>
              <div className="btn-toolbar pull-right" role="toolbar">
                <div className="btn-group" role="group">
                  <NavbarUser user={this.props.user} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
