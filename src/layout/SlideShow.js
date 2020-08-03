import { Component } from 'react';

class SlideShowLayout extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }
  render() {
    const { children} = this.props;
    return children;
  }
}

export default SlideShowLayout;
