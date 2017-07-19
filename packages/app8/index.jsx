import React from 'react';

class GroceryListItems extends React.Component {
  onListItemClick = (event) => {
    console.log('I got clicked');
  };

  render = () => (<ul>
    {
      this.props.items.map(item => (
        <li>{item}</li>
          ))
    }
  </ul>)
}

const App = () => (
  <div>
    <h2>APP 8 My Grocery List</h2>
    <GroceryListItems items={['Cucumber', 'Kale', 'Banana']} />
  </div>
);


React.render(<App />, document.getElementById('App8'));
