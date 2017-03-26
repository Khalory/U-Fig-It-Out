import React from 'react';

export default class listingPage extends React.Component {
  render() {
    return (
    	<div>
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
		          <a className="navbar-brand" href="#">
		            <span className="glyphicon glyphicon-home"></span>
		          </a>
		        </div>

		        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
		          <form className="navbar-form navbar-left center-block" role="search">
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
		            <div className="btn-toolbar pull-right" role="toolbar">
		              <div className="btn-group" role="group">
		                <button type="button" className="btn btn-default navbar-btn">
		                  <span className="glyphicon glyphicon-user"></span>
		                  FigMan
		                </button>
		                <div className="btn-group" role="group">
		                  <button type="button" className="btn btn-default navbar-btn dropdown-toggle"
		                          data-toggle="dropdown">
		                    <span className="caret"></span>
		                  </button>
		                  <ul className="dropdown-menu">
		                    <li><a href="#">Sell an Item!</a></li>
		                    <li><a href="#">Request an Item!</a></li>
		                    <li><a href="#">Log out...</a></li>
		                  </ul>
		                </div>
		              </div>
		            </div>
		          </div>
		        </div>
		      </div>
		    </nav>



		    <div className="container">
		      <div className="row">
		        <div className="col-md-4 item-category">
		          {"Food > Healthy > Best > Figs"}
		        </div>
		      </div>
		      <hr className="hr-mini" />
		      <div className="col-md-12">
		        <div className="row">
		          <div className="col-md-1"></div>
		          <div className="row">
		            <div className="col-md-5">
		              <div className="row item-images">
		                <div className="col-md-8">
		                  <img className="img-thumbnail" src="img/figs-1.jpg" width="100%" />
		                </div>
		                <div className="col-md-4">
		                  <div className="row item-subimage-chevron">
		                    <div className="btn-group" role="group">
		                      <button type="button" className="btn btn-default navbar-btn">
		                        <span className="glyphicon glyphicon-chevron-right">></span>
		                      </button>
		                    </div>
		                  </div>
		                  <div className="row item-subimage">
		                    <div>
		                      <img className="img-thumbnail" src="img/figs-2.jpg" width="45%" />
		                      <img className="img-thumbnail" src="img/figs-3.jpg" width="45%" />
		                    </div>
		                  </div>
		                </div>
		              </div>
		            </div>
		            <div className="col-md-5">
		              <div className="row">
		                <span className="item-header">Top Quality Fig - CHEAP!</span>
		                <br/>
		                <span className="item-price">{"$13.37"}</span>
		              </div>
		              <div className="row">
		                <ul className="nav nav-pills pull-left">
		                  <li role="presentation" className="active">
		                    <span className="glyphicon glyphicon-star"></span>
		                  </li>
		                  <li role="presentation">
		                    <span className="glyphicon glyphicon-star"></span>
		                  </li>
		                  <li role="presentation">
		                    <span className="glyphicon glyphicon-star"></span>
		                  </li>
		                  <li role="presentation">
		                    <span className="glyphicon glyphicon-star-empty"></span>
		                  </li>
		                  <li role="presentation">
		                    <span className="glyphicon glyphicon-star-empty"></span>
		                  </li>
		                </ul>
		              </div>
		              <div className="row">
		                <div className="btn-group" role="group">
		                  <button type="button" className="btn btn-default navbar-btn">
		                    Request Communication
		                  </button>
		                </div>
		              </div>
		            </div>
		          </div>
		        </div>
		        <br/>
		        <br/>
		        <div className="row">
		          <div className="col-md-1"></div>
		          <div className="col-md-10">
		            <div className="panel panel-default">
		              <div className="panel-body">
		                {"This is the best fig ever, grown in a garden of magic beans which has numerous giant beanstocks. In fact, this fig\
		                actually grew on one of the giant bean stocks, thus being imbued with the power of giants. You won't find another\
		                fig like this ever, especially not for this cheap, cheap price because I don't like figs very much."}
		              </div>
		            </div>
		          </div>
		        </div>
		        <div className="row">
		          <div className="col-md-1"></div>
		          <div className="col-md-10">
		            <h4>Acceptable Payments</h4>
		            <table className="table item-payments">
		              <tbody>
		                <tr>
		                  <td><input type="checkbox" disabled="true" checked>Venmo</input></td>
		                  <td><input type="checkbox" disabled="true">Paypal</input></td>
		                  <td><input type="checkbox" disabled="true" checked>Figs</input></td>
		                  <td><input type="checkbox" disabled="true" checked>Cash</input></td>
		                </tr>
		                <tr>
		                  <td><input type="checkbox" disabled="true">Check</input></td>
		                  <td><input type="checkbox" disabled="true" checked>Barter</input></td>
		                  <td><input type="checkbox" disabled="true">Bank Transfer</input></td>
		                  <td></td>
		                </tr>
		              </tbody>
		            </table>
		          </div>
		        </div>
		      </div>
		    </div>
		</div>
    )
  }
}
