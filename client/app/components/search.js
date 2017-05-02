import React from 'react';
import Navbar from './navbar'
import SearchLeftBar from './searchleftbar';
import SearchListings from './searchlistings';

export default class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      contents: [],
      category: this.props.location.query.category ? this.props.location.query.category : ''
    }
  }

  componentDidUpdate() {
    if (this.state.category === this.props.location.query.category)
      return
    this.setState({
      category: this.props.location.query.category ? this.props.location.query.category : ''
    })
  }

  render() {
    return (
      <div>
        <Navbar user={this.props.params.id} category={this.state.category} searchText={this.props.location.query.searchText} />
        <SearchLeftBar activeIndex={this.state.category} user={this.props.params.id} searchText={this.props.location.query.searchText}/>
        <SearchListings category={this.state.category} user={this.props.params.id} searchText={this.props.location.query.searchText}/>
      </div>
    )
  }
}
