import React from 'react';
import {getCategories} from '../server'
import { Link } from 'react-router'

export default class SearchLeftBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeIndex: this.props.activeIndex,
      categoriesList: []
    }
  }

componentDidMount() {
  getCategories((categories) => {
    this.setState({categoriesList: categories})
  })
}

  render() {

    return <div>
      <div className="col-md-2 fig-categories">
        <ul className="nav nav-pills nav-stacked">
        { this.state.categoriesList.map((category) => {
            return <Category key={category._id}
              name={ category.name }
              index={ category._id }
              isActive={ this.props.activeIndex == category._id }
              user={ this.props.user }
              searchText={ this.props.searchText }
            /> } )
        }
        </ul>
      </div>
    </div>
  }
}

class Category extends React.Component {

  render () {
    return <Link to={"/search/" + this.props.user} query={{category:this.props.index, searchText:this.props.searchText}}><li role="presentation" className={this.props.isActive ? "active" : "inactive"}>
      {this.props.name}
    </li>
  </Link>
  }
}
