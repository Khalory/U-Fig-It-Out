import React from 'react';

export default class SearchLeftBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeIndex: null
    }
  }

  handleClick(index) {
    this.setState({activeIndex: index})
  }


  render() {
    var categories = [
        { name: <b>BOOKS</b> },
        { name: "Textbooks" },
        { name: "Non-textbooks" },
        { name: <b>CARS</b>},
        { name: "Vehicles"},
        { name: "Automotive Accessories"},
        { name: <b>CLOTHING</b>},
        { name: "Men"},
        { name: "Women"},
        { name: <b>HOUSEHOLD</b>},
        { name: "Furniture"},
        { name: "Refrigerators and Appliances"},
        { name: "Other Items"},
        { name: <b>FIGS</b>},
        { name: <b>ELECTRONICS</b>},
        { name: "iClickers"},
        { name: "Cell Phones"},
        { name: "Other Electronic Items"},
        { name: <b>COMPUTER</b>},
        { name: "Laptops"},
        { name: "Desktops"},
        { name: "Computing Accessories"},
        { name: <b>VIDEO GAMES</b>},
        { name: "Consoles"},
        { name: "Games"},
        { name: "Gaming Accessories"}
    ]

    return <div>
      <div className="col-md-2 fig-categories">
        <ul className="nav nav-pills nav-stacked">
        { categories.map((category, i) => {
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
