import React, { PureComponent } from 'react';
import router from 'umi/router';

import HeaderComponent from "../components/header/header"
import FooterComponent from "../components/footer/footer"
// import Design from "./design/design"

class Home extends PureComponent {

    componentDidMount() {

    }

    render() {
        return ( 
            <div >
            <HeaderComponent / >
                {/* <Design /> */}
            {/* 资主页 */}
            <FooterComponent />
            </div>
        );
    }
}
export default Home;