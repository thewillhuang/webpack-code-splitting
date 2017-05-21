import { Component } from 'react';

class Loader extends Component {
  state = {
    // short for "module" but that's a keyword in js, so "mod"
    mod: null,
  }

  componentWillMount = () => {
    this.load(this.props);
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.load !== this.props.load) {
      this.load(nextProps);
    }
  }

  load = (props) => {
    this.setState({
      mod: null,
    });
    props.load(async (mod) => {
      const lib = await mod;
      this.setState(() => ({
        // handle both es imports and cjs
        mod: lib.default ? lib.default : lib,
      }));
    });
  }

  render = () => this.props.children(this.state.mod)
}

export default Loader;
