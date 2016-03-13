import React from 'react';
import themeDecorator from 'material-ui/lib/styles/theme-decorator';
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';

import Input from './Input';

function App() {
  return (
    <div>
      <Input />
    </div>
  );
}

export default themeDecorator(getMuiTheme(null, { userAgent: 'all' }))(App);
