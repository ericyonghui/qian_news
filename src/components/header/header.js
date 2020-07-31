import React from "react";
import router from 'umi/router';
import {Link} from "react-router-dom"
import { Row, Col, Menu, Input, Divider } from "antd";
import { MenuUnfoldOutlined ,CloseCircleOutlined} from "@ant-design/icons";

import style from "./header.less";

import { AudioOutlined } from "@ant-design/icons";

const { Search } = Input;

const routerArr=[
  {
    routerKey:"home",
    routerVal:""
  },
  {
    routerKey:"runway",
    routerVal:"/runway"
  },
  {
    routerKey:"style",
    routerVal:"/style"
  },
  {
    routerKey:"streetSnap",
    routerVal:"/streetSnap"
  },
  {
    routerKey:"design",
    routerVal:"/design"
  },
  {
    routerKey:"material",
    routerVal:"/material"
  },
  {
    routerKey:"tupian",
    routerVal:""
  },
];

export default class HeaderComponent extends React.Component {
  constructor(props){
    super(props);
    this.state={
      current: "index",
      display:'none'
    }
  }

  handleClick = e => {
    let res = routerArr.filter(item=>{return item.routerKey === e.key});
    if(res[0].routerVal!==''){
      router.push(res[0].routerVal);
    } else {
      router.push(`/home`);
    }
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
        <Row className={style.pc_container} style={{height:"75px"}}>
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
              <Menu.Item key="home">首页</Menu.Item>
              <Menu.Item key="runway">T台</Menu.Item>
              <Menu.Item key="style">款式</Menu.Item>
              <Menu.Item key="streetSnap">街拍</Menu.Item>
              <Menu.Item key="design">图案</Menu.Item>
              <Menu.Item key="material">素材</Menu.Item>
              <Menu.Item key="tupian">图片库</Menu.Item>
            </Menu>
          </Col>
          <Col span={7} className={style.search}>
            <Search
              placeholder="input search text"
              onSearch={value => console.log(value)}
              enterButton
            />
            <div className={style.searchList} style={{display:'none'}}>
              <div className={style.searchHistory}>
                <span>最近搜索</span>
                <CloseCircleOutlined  className={style.ICON} /> 
              </div>
              <ul className={`${style.searchHistoryList} ${style.clearfix}`}>
                <li>milan</li>
                <li>taotou</li>
              </ul>
              <div className={`${style.ulList} ${style.clearfix}`}>
                <h4>性别</h4>
                  <ul>
                    <li>
                      <img src="" />
                      <span>男装</span>
                    </li>
                    <li>
                      <img src="" />
                      <span>女装</span>
                    </li>
                    <li>
                      <img src="" />
                      <span>童装</span>
                    </li>
                  </ul>
              </div>

              <div className={`${style.ulList} ${style.clearfix}`}>
                <h4>类别</h4>
                  <ul>
                    <li>
                      <img src="" />
                      <span>T台</span>
                    </li>
                    <li>
                      <img src="" />
                      <span>款式</span>
                    </li>
                    <li>
                      <img src="" />
                      <span>街拍</span>
                    </li>
                    <li>
                      <img src="" />
                      <span>图案</span>
                    </li>
                    <li>
                      <img src="" />
                      <span>手绘</span>
                    </li>
                  </ul>
              </div>

              <div className={`${style.ulList} ${style.clearfix}`}>
                <h4>季节</h4>
                  <ul>
                    <li>
                      <img src="" />
                      <span>2020早春</span>
                    </li>
                    <li>
                      <img src="" />
                      <span>2020春夏</span>
                    </li>
                    <li>
                      <img src="" />
                      <span>2020早秋</span>
                    </li>
                    <li>
                      <img src="" />
                      <span>2020秋冬</span>
                    </li>
                  </ul>
              </div>

              <div>
                <h4>年份</h4>

              </div>
            </div>
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
        <Row className={style.m_container} style={{height:"60px"}}>
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
          {/* </div> */}
        {/* mini header list */}
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
              <Menu.Item key="home">首页</Menu.Item>
              <Menu.Item key="runway">T台</Menu.Item>
              <Menu.Item key="style">款式</Menu.Item>
              <Menu.Item key="streetSnap">街拍</Menu.Item>
              <Menu.Item key="design">图案</Menu.Item>
              <Menu.Item key="material">素材</Menu.Item>
              <Menu.Item key="tupian">图片库</Menu.Item>
            </Menu>
          </div>
        </Row>
      </div>
    );
  }
}
