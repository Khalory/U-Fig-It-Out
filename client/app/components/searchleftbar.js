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
        { this.state.categoriesList.map((category, i) => {
            return <Category key={i}
              name={ category.name }
              index={ i }
              isActive={ this.props.activeIndex == i }
            /> } )
        }
        </ul>
      </div>
    </div>
  }
}

class Category extends React.Component {

  render () {
    return <Link to={"/search/" + this.props.index}><li role="presentation" className={this.props.isActive ? "active" : "inactive"}>
      {this.props.name}
    </li>
  </Link>
  }
}
