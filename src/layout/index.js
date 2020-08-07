import { Component } from 'react';
import Header from "../components/header/header"
import Footer from "../components/footer/footer"


class BasicLayout extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    window.scrollTo(0, 0);
    return true;
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

export default BasicLayout;
