import React from 'react'

import NavbarUser from './navbarUser.js'

export default class Navbar extends React.Component {
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
            <a className="navbar-brand" href="http://localhost:8080/main.html">
              <span className="glyphicon glyphicon-home"></span>
            </a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <form className="navbar-form navbar-left" role="search">
              <div className="input-group">
                <input type="text" className="form-control fig-search" placeholder="Search UFig" />
                <span className="input-group-btn">
                  <button type="submit" className="btn btn-default">
                    <span className="glyphicon glyphicon-search"></span>
                  </button>
                </span>
              </div>
            </form>
            <div className="nav navbar-nav navbar-right">
              <button type="button" className="btn btn-default navbar-btn">
                <li><ab href="#" className="slightUp">Sell an item!</ab></li>
              </button>
              <div className="btn-toolbar pull-right" role="toolbar">
                <div className="btn-group" role="group">
                  <NavbarUser />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
