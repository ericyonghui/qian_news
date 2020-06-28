import React, { PureComponent } from 'react';
import router from 'umi/router';

import HeaderComponent from "../components/header/header"
import FooterComponent from "../components/footer/footer"

class Home extends PureComponent {

    componentDidMount() {

    }

    render() {
        return ( 
            <div >
            <HeaderComponent / >
            资主页
            <FooterComponent />
            </div>
        );
    }
}
export default Home;