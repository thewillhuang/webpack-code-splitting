import React, {render} from 'react';

render(
  <h1><p>module/a.js executed, using {React.version}</p></h1>,
  document.getElementById('App1')
);

export default () => {}
