import React from "react";
import ReactDOM from "react-dom";
import {Link} from "react-router-dom"
import { Row, Col, Menu, Input, Divider } from "antd";
import { MenuUnfoldOutlined } from "@ant-design/icons";
import MediaQuery from "react-responsive";

import style from "./header.less";

import { AudioOutlined } from "@ant-design/icons";

const { Search } = Input;

export default class HeaderComponent extends React.Component {
  constructor(props){
    super(props);
    this.state={
      current: "index",
      display:'none'
    }
  }
 
  handleClick = e => {
    // console.log("click ", e);
    this.setState({
      current: e.key
    });
  };
  showNav = e =>{
    this.setState({display: "block"});
  }
  hideNav = e =>{
    this.setState({display: "none"});
  }
  
  render() {
    return (
      <div>
        {/* pc 大于等于1024 >ipad */}
        <Row className={style.pc_container}>
          <Col span={2} className={style.logo}>
            千尚
          </Col>
          <Col span={12}>
            <Menu
              onClick={this.handleClick}
              selectedKeys={[this.state.current]}
              mode="horizontal"
              className={style.menu}
            >
              <Menu.Item key="index"><Link to="/">首页</Link></Menu.Item>
              <Menu.Item key="Ttai">T台</Menu.Item>
              <Menu.Item key="kuanshi"><Link to="/design">款式</Link></Menu.Item>
              <Menu.Item key="jiepai">街拍</Menu.Item>
              <Menu.Item key="tuan"><Link to="/pattern">图案</Link></Menu.Item>
              <Menu.Item key="sucai">素材</Menu.Item>
              <Menu.Item key="tupian">图片库</Menu.Item>
            </Menu>
          </Col>
          <Col span={7} className={style.search}>
            <Search
              placeholder="input search text"
              onSearch={value => console.log(value)}
              enterButton
            />
          </Col>
          <Col span={3} className={style.user}>
            <ul>
              <li>登录</li>
              <li>注册</li>
            </ul>
            {/* <div>hello xxx</div> */}
          </Col>
        </Row>
        {/* m 小于1023 */}

        <Row className={style.m_container}>
          <div className={style.menu}>
            <Col md={2} sm={3} xs={3} className={style.logo}>千尚</Col>
            <Col  md={20} sm={18} xs={18} className={style.search}>
              <Search
                placeholder="input search text"
                onSearch={value => console.log(value)}
                enterButton
              />
            </Col>
            <Col md={2} sm={3} xs={3} className={style.fonticon}>
              <MenuUnfoldOutlined onClick={this.showNav} />
            </Col>
          </div>

          <div className={style.mark} style={{display:this.state.display}} onClick={this.hideNav}></div>
          <div className={style.minNav} style={{display:this.state.display}}>
            <div className={`${style.userContainer} ${style.clearfix}`}>
              <ul>
                <li>登录</li>
                <li>注册</li>
              </ul>
              {/* <div className={style.userinfo}>hello world</div> */}
            </div>
            <Menu className={style.menuLis}>
              <Menu.Item key="index"><Link to="/">首页</Link></Menu.Item>
              <Menu.Item key="Ttai">T台</Menu.Item>
              <Menu.Item key="kuanshi"><Link to="/design">款式</Link></Menu.Item>
              <Menu.Item key="jiepai">街拍</Menu.Item>
              <Menu.Item key="tuan"><Link to="/pattern">图案</Link></Menu.Item>
              <Menu.Item key="sucai">素材</Menu.Item>
              <Menu.Item key="tupian">图片库</Menu.Item>
            </Menu>
          </div>
        </Row>
      </div>
    );
  }
}
