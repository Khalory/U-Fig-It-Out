import React from 'react'
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import { IndexRoute, Router, Route, browserHistory } from 'react-router'


// Each major browser view user interface must be imported.
import Index from './components/index'
import Main from './components/main'
import Newlisting from './components/newlisting'
//import Navbar from './components/navbar'
//import NavbarUser from './components/navbarUser'
import ListingPage from './components/listingPage'
import Profile from './components/profile'
//import ProfileInfo from './components/profile-info'
//import ProfileListings from './components/profile-listings'
import Search from './components/search'
//import ChatPopup from './components/chat-popup'

class App extends React.Component {
  render() {
    return (
      <div>{this.props.children}</div>
    )
  }
}

//Force the state of each page

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Index} />
      <Route path="main/:id" component={Main} />
      <Route path="profile/:id" component={Profile} />
      <Route path="item/:id" component={ListingPage} />
      <Route path="make_listing/:id" component={Newlisting} />
      <Route path="search/:id" component={Search} />
    </Route>
  </Router>
), document.getElementById('index'));
