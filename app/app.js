import React from 'react';
import ReactDOM from 'react-dom';

// Each major browser view user interface must be imported.
import UserRating from './components/user-rating.js';

// For each view conditionally determine which view to display
// depending on if the ID is present in the HTML.

if (document.getElementById('user-rating') !== null) {
  console.log("hello")
  ReactDOM.render(
    <UserRating />,
    document.getElementById('user-rating')
  );
}
