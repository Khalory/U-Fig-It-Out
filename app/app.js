import React from 'react'//dont ever remove this everything will break
import ReactDOM from 'react-dom';


// Each major browser view user interface must be imported.
import Newlisting from './components/newlisting'
import Main from './components/main'
import ListingPage from './components/listingPage'

// For each view conditionally determine which view to display
// depending on if the ID is present in the HTML.
if (document.getElementById('ui-03') !== null) {
  ReactDOM.render(
    <Main />,
    document.getElementById('ui-03')
  )
} else if (document.getElementById('listingPage') !== null) {
  ReactDOM.render(
    <ListingPage />,
    document.getElementById('listingPage')
  )
}else if(document.getElementById('newlisting') !== null){
  ReactDOM.render(
    <Newlisting />,
    document.getElementById('newlisting')
  )
}
