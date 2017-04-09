import React from 'react'
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import { IndexRoute, Router, Route, browserHistory } from 'react-router'


// Each major browser view user interface must be imported.
import Index from './components/index'
import Main from './components/main'
import Newlisting from './components/newlisting'
import Navbar from './components/navbar'
import NavbarUser from './components/navbarUser'
import ListingPage from './components/listingPage'
import Profile from './components/profile'
import ProfileInfo from './components/profile-info'
import ProfileListings from './components/profile-listings'
import Search from './components/search'
import ChatPopup from './components/chat-popup'

class App extends React.Component {
  render() {
    return (
      <div>{this.props.children}</div>
    )
  }
}

//Force the state of each page
class ProfilePage extends React.Component {
  render() {
    return <Profile user={1} />;
  }
}
class ListingP extends React.Component {
  render() {
    return <ListingPage id={2} />;
  }
}

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Index} />
      <Route path="main" component={Main} />
      <Route path="profile/:id" component={ProfilePage} />
      <Route path="item/:id" component={ListingP} />
      <Route path="make_listing" component={Newlisting} />
      <Route path="search" component={Search} />
    </Route>
  </Router>
),document.getElementById('index'));

if (document.getElementById('top-navbar') !== null) {
  ReactDOM.render(
    <Navbar />,
    document.getElementById('top-navbar')
  )
}
if (document.getElementById('navbar-user') !== null) {
  ReactDOM.render(
    <NavbarUser />,
    document.getElementById('navbar-user')
  )
}
if (document.getElementById('profile-info') !== null) {
  ReactDOM.render(
    <ProfileInfo user={1} />,
    document.getElementById('profile-info')
  )
}
if (document.getElementById('profile-listings') !== null) {
  ReactDOM.render(
    <ProfileListings user={1} userListings={[]} />,
    document.getElementById('profile-listings')
  )
}
if (document.getElementById('listingPage') !== null) {
  ReactDOM.render(
    <ListingPage id={2}/>,
    document.getElementById('listingPage')
  )
}
 if(document.getElementById('newlisting') !== null){
  ReactDOM.render(
    <Newlisting />,
    document.getElementById('newlisting')
  )
}
if (document.getElementById('search') !== null) {
  ReactDOM.render(
    <Search />,
    document.getElementById('search')
  );
}
if(document.getElementById('chat-popup')!== null){
  ReactDOM.render(
    <ChatPopup />,
    document.getElementById('chat-popup')
  )
}
