import 'systemjs-hot-reloader/default-listener.js';

export function __reload(m) {
  if (m.component.state) {
    component.setState(m.component.state);
  }
}

import React from 'react';
import ReactDOM from 'react-dom';
import App from 'app/app.js';

let component = ReactDOM.render(React.createElement(App), document.getElementById('root'));
