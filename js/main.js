import React from 'react';
console.log(React.version);
document.getElementById('App').innerHTML += '<p>main.js loaded</p>';

import('./views/1').then((module) => {
  console.log('./views/1 loaded');
}).catch(e => console.log(e));

import('./views/2').then((module) => {
  console.log('./views/2 loaded');
}).catch(e => console.log(e));;
