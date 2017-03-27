import React from 'react'
import ReactDOM from 'react-dom';


// Each major browser view user interface must be imported.
import Newlisting from './components/newlisting'
import Navbar from './components/navbar'
import NavbarUser from './components/navbarUser'
import ListingPage from './components/listingPage'
import ProfileInfo from './components/profile-info'
import ProfileListings from './components/profile-listings'
import SearchLeftBar from './components/searchleftbar'
import SearchListings from './components/searchlistings'

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
if (document.getElementById('profile') !== null) {
  ReactDOM.render(
    <ProfileInfo />,
    document.getElementById('profile')
  )
}
if (document.getElementById('profile-listings') !== null) {
  ReactDOM.render(
    <ProfileListings />,
    document.getElementById('profile-listings')
  )
}
if (document.getElementById('searchleftbar') !== null) {
  ReactDOM.render(
    <SearchLeftBar />,
    document.getElementById('searchleftbar')
  )
}
if (document.getElementById('searchlistings') !== null) {
  ReactDOM.render(
    <SearchListings />,
    document.getElementById('searchlistings')
  )
}
if (document.getElementById('listingPage') !== null) {
  ReactDOM.render(
    <ListingPage />,
    document.getElementById('listingPage')
  )
}
 if(document.getElementById('newlisting') !== null){
  ReactDOM.render(
    <Newlisting />,
    document.getElementById('newlisting')
  )
}
