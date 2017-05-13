import React, { render } from 'react';

const grabModules = async () => {
  const { default: One } = await import('./views/1');
  const { default: Two } = await import('./views/2');
  render(
    <div>
      <p>app2 loaded, using {React.version}</p>
      <One />
      <Two />
    </div>,
    global.document.getElementById('App2'),
  );
};

grabModules();
