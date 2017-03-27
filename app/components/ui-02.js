import React from 'react';

import UI02List from './ui-02-list';

export default class UI02 extends React.Component {
  render() {
    return (
      <div>
	<h1>This is UI #2</h1>
	<UI02List name="happy" />
	<UI02List name="sad" />
      </div>
    )
  }
}
