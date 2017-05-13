import React, { render } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

const App = React.createClass({
  render() {
    return (
      <div>
        <h3>App2 loaded using {React.version}</h3>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
          <li><Link to="/one">One</Link></li>
          <li><Link to="/two">Two</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  },
});

const About = React.createClass({
  render() {
    return <h3>About</h3>;
  },
});

const Inbox = React.createClass({
  render() {
    return (
      <div>
        <h2>Inbox</h2>
        {this.props.children || 'Welcome to your Inbox'}
      </div>
    );
  },
});

const Message = React.createClass({
  render() {
    return <h3>Message {this.props.params.id}</h3>;
  },
});

const Modules = async () => {
  const { default: One } = await import('./views/1');
  const { default: Two } = await import('./views/2');
  render((
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="about" component={About} />
        <Route path="one" component={One} />
        <Route path="two" component={Two} />
        <Route path="inbox" component={Inbox}>
          <Route path="messages/:id" component={Message} />
        </Route>
      </Route>
    </Router>
  ), global.document.getElementById('App2'));
};

Modules();
