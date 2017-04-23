import React from 'react';
import {getCategories} from '../server'

export default class SearchLeftBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeIndex: this.props.activeIndex,
      categoriesList: []
    }
  }

  handleClick(index) {
    this.setState({activeIndex: index})
  }

  render() {
    getCategories((categories) => {
      this.setState({categoriesList: categories})
    })

    return <div>
      <div className="col-md-2 fig-categories">
        <ul className="nav nav-pills nav-stacked">
        { this.state.categoriesList.map((category, i) => {
            return <Category key={i}
              name={ category.name }
              index={ i }
              isActive={ this.state.activeIndex === i }
              onClick={ this.handleClick.bind(this) }
            /> } )
        }
        </ul>
      </div>
    </div>
  }
}

class Category extends React.Component {

  handleClick() {
    this.props.onClick(this.props.index)
  }

  render () {
    return <li role="presentation" className={this.props.isActive ? "active" : "inactive"} onClick={this.handleClick.bind(this)}>
      <a href="#">{this.props.name}</a>
    </li>
  }
}
