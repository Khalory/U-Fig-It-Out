import React from 'react'
import ReactDOM from 'react-dom';


// Each major browser view user interface must be imported.
import Newlisting from './components/newlisting'
import Navbar from './components/navbar'
import NavbarUser from './components/navbarUser'
import ListingPage from './components/listingPage'
import ProfileInfo from './components/profile-info'
import ProfileListings from './components/profile-listings'
import Search from './components/search'
import ChatPopup from './components/chat-popup'
// For each view conditionally determine which view to display
// depending on if the ID is present in the HTML.
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
