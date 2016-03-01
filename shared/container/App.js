import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Input from '../Input.jsx';

import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';
import themeDecorator from 'material-ui/lib/styles/theme-decorator';

@themeDecorator(getMuiTheme(null, { userAgent: 'all' }))
class App extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <Input />
      </div>
    );
  }
}

export default App;
