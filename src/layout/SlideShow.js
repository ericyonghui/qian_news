import { Component } from 'react';
import withRouter from 'umi/withRouter';

class SlideShowLayout extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }
  render() {
    const { children} = this.props;
    return children;
  }
}

export default withRouter(SlideShowLayout);
