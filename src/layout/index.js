import { Component } from 'react';
import Header from "../components/header/header"
import Footer from "../components/footer/footer"


class BasicLayout extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  componentDidUpdate() {
    window.scrollTo(0, 0);
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
