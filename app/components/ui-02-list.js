import React from 'react';

export default class UI02List extends React.Component {
  render() {
    return (
      <div>
	<h3>{this.props.name}</h3>
	<ul>
	  <li>One</li>
	  <li>Two</li>
	  <li>Three</li>
	</ul>
      </div>
    )
  }
}
