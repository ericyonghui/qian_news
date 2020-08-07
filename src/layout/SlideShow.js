import { Component } from 'react';

class SlideShowLayout extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    window.scrollTo(0, 0);
    return true;
  }
  render() {
    const { children} = this.props;
    return children;
  }
}

export default SlideShowLayout;
