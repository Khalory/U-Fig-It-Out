import React from 'react';
import Navbar from './navbar'
import ChatPopup from './chat-popup'
import {getUserData} from '../server'

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: []
    };
  }

  componentDidMount() {
    getUserData(this.props.params.id, (userData) => {
      this.setState(userData);
    });
  }

  render() {
    return(
      <div background = "http://www.indoorcitrustrees.com/wp-content-uploads/2016/05/Indoor-fig-tree-5.jpeg">
        <Navbar user={this.state._id} name={this.state.username} />
        <div>
          <font face = "Comic sans MS" size = "6"><center>U-Fig-It-Out</center></font>
        </div>
        <form>
          <input type="text" className="form-control home-search" placeholder="Search UFig" />
        </form>
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <table className="table centerTable lightBlack">
              <tbody>
                <tr>
                  <td><a href="http://localhost:8080/search.html#">Textbooks</a></td>
                  <td><a href="http://localhost:8080/search.html#">Cars</a> </td>
                  <td><a href="http://localhost:8080/search.html#">Clothing</a> </td>
                </tr>
                <tr>
                  <td><a href="http://localhost:8080/search.html#">Household</a> </td>
                  <td><a href="http://localhost:8080/search.html#">FIGS!!!!</a> </td>
                  <td><a href="http://localhost:8080/search.html#">Electronics</a> </td>
                </tr>
                <tr>
                  <td><a href="http://localhost:8080/search.html#">Video Games</a></td>
                  <td><a href="http://localhost:8080/search.html#">Tim Richards pictures</a></td>
                  <td><a href="http://localhost:8080/search.html#">Even more Figs</a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <ChatPopup />
      </div>
    )
  }
}
