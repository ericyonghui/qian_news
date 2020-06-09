import { Component } from 'react';

class BasicLayout extends Component {
  render() {
    const { children} = this.props;
    return children;
  }
}

export default BasicLayout;
