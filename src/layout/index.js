import { Component } from 'react';
import withRouter from 'umi/withRouter';
import Header from "../components/header/header"
import Footer from "../components/footer/footer"


class BasicLayout extends Component {

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    const { children} = this.props;
    return <div>
      <Header/>
      {children}
      <Footer/>
    </div>;
  }
}

export default withRouter(BasicLayout);
