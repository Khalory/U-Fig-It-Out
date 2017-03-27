import React from 'react'
import ReactDOM from 'react-dom'

// Each major browser view user interface must be imported.
import newlisting from './components/newlisting'
import Main from './components/main.js'

// For each view conditionally determine which view to display
// depending on if the ID is present in the HTML.
if (document.getElementById('ui-01') !== null) {
  ReactDOM.render(
    <UI01 />,
    document.getElementById('ui-01')
  )
} else if (document.getElementById('ui-02') !== null) {
  ReactDOM.render(
    <UI02 />,
    document.getElementById('ui-02')
  )
} else if (document.getElementById('ui-03') !== null) {
  ReactDOM.render(
    <Main />,
    document.getElementById('ui-03')
  );
} else if (document.getElementById('ui-03') !== null) {
  ReactDOM.render(
    <Main />,
    document.getElementById('ui-03')
  )
}
