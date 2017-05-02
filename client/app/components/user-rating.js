import React from 'react';
import { Link } from 'react-router'
import { getUserData } from '../server'

export default class UserRating extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props
  }

  componentDidMount() {
    if (typeof(this.state.owner) !== 'number')
      return

    getUserData(this.state.owner, (user) => {
      this.setState({owner: user})
    })
  }

  componentDidUpdate() {
    if (this.state.owner === this.props.owner && this.props.owner !== null)
      return

    if (typeof this.props.owner === 'object') {
      this.setState({owner: this.props.owner})
      return
    }

    getUserData(this.props.owner, (user) => {
      this.setState({owner: user})
    })
  }

  calcRating() {
    var stars = []
    for(var i=1; i<6; i++) {
      if (i<=this.state.owner.avg_rating) {
        stars.push((<li role="presentation" className="active" key={i}>
                    <span className="glyphicon glyphicon-star"></span>
                  </li>))
      }
      else {
        stars.push((<li role="presentation" className="active" key={i}>
                    <span className="glyphicon glyphicon-star-empty"></span>
                  </li>))
      }
    }
    return stars
  }

  render() {
    console.log(this.state.owner)
    var rating = this.calcRating()
    return (
      <div>
        <h3><Link to={"/profile/" + this.props.owner} query={{ user:this.state.owner._id }}>{this.state.owner.username}</Link></h3>
        <ul className="nav nav-pills pull-left">
          {rating}
        </ul>
      </div>
    )
  }
}
