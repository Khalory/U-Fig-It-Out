import React from 'react';
import Navbar from './navbar'
import ChatPopup from './chat-popup'
import { Link } from 'react-router'
import {getCategories} from '../server'

export default class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = null
  }

  componentDidMount() {
    getCategories((categories) => {
      this.setState({categories: categories})
    })
  }

  render() {
    if(this.state === null)
      return <div></div>

    return(
      <div background = "http://www.indoorcitrustrees.com/wp-content-uploads/2016/05/Indoor-fig-tree-5.jpeg">
        <Navbar user={this.props.params.id} />
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
                  <td><Link to={"/search/" + this.props.params.id} query={{category:this.state.categories[0]._id}}>{this.state.categories[1].name}</Link></td>
                  <td><Link to={"/search/" + this.props.params.id} query={{category:this.state.categories[1]._id}}>{this.state.categories[2].name}</Link></td>
                  <td><Link to={"/search/" + this.props.params.id} query={{category:this.state.categories[2]._id}}>{this.state.categories[3].name}</Link> </td>
                </tr>
                <tr>
                  <td><Link to={"/search/" + this.props.params.id} query={{category:this.state.categories[3]._id}}>{this.state.categories[4].name}</Link></td>
                  <td><Link to={"/search/" + this.props.params.id} query={{category:this.state.categories[4]._id}}>{this.state.categories[5].name}</Link></td>
                  <td><Link to={"/search/" + this.props.params.id} query={{category:this.state.categories[5]._id}}>{this.state.categories[6].name}</Link></td>
                </tr>
                <tr>
                  <td><Link to={"/search/" + this.props.params.id} query={{category:this.state.categories[6]._id}}>{this.state.categories[7].name}</Link></td>
                  <td><Link to={"/search/" + this.props.params.id} query={{category:this.state.categories[7]._id}}>{this.state.categories[8].name}</Link></td>
                  <td><Link to={"/search/" + this.props.params.id} query={{category:this.state.categories[8]._id}}>{this.state.categories[9].name}</Link></td>
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
