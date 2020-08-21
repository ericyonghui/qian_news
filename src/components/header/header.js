import React, { PureComponent } from 'react';
import router from 'umi/router';
import Link from 'umi/link';
import { Row, Col, Menu, Input ,Select } from "antd";
import { MenuUnfoldOutlined ,CloseOutlined,SearchOutlined,CheckCircleFilled} from "@ant-design/icons";
import Login from '../Login';
import style from "./header.less";
import img1 from "../../assets/season/early_spring.png"
import img2 from "../../assets/season/early_autumn.jpg"
import img3 from "../../assets/season/spring_summer.jpg"
import img4 from "../../assets/season/autumn_winter.jpg"
import img5 from "../../assets/gender/women.jpg"
import img6 from "../../assets/gender/men.png"
import img7 from "../../assets/gender/kids.jpg"
import img8 from "../../assets/block/runway.png"
import img9 from "../../assets/block/design.jpg"
import img10 from "../../assets/block/material.png"
import img11 from "../../assets/block/style.jpg"
import img12 from "../../assets/block/streetSnap.png"

const { Search } = Input;
const { Option } = Select;

const routerArr=[
  {
    routerKey:"home",
    routerVal:"/home"
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
  }
];

class HeaderComponent extends PureComponent {
  state={
    current: "index",
    display:'none',
    searchDisplay: 'none',
    headerHeight:0,
    loginMark:'none',
    loginFlag: false,
    nickname:''
  };

  componentDidMount(){
    console.info(`componentDidMount`)
    const nickname = localStorage.getItem('nickname');
    console.info(nickname);
    if(nickname){
      this.setState({
        nickname,
        loginFlag: true
      },()=>{
        console.info(this.state.loginFlag)
      })
    } else {
      this.setState({
        nickname:'',
        loginFlag: false
      },()=>{
        console.info(this.state.loginFlag)
      })
    }
    const headerDom = this.headerDom;
    if(headerDom){
     this.setState({
       headerHeight: headerDom.clientHeight
     })
   }
  }
  componentDidUpdate(prevProps) {
    console.info(`componentDidUpdate`)
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
  showSearchNav = e =>{
    this.setState({searchDisplay: "block"});
  }
  hideSearchNav = e =>{
    this.setState({searchDisplay: "none"});
  }
  renderSearchDom(){
    return <div className={style.searchList} style={{display:this.state.searchDisplay}}>
      <div className={style.searchBorder}>
        <div className={style.searchHistory}>
          <span>最近搜索</span>
        </div>
        <ul className={`${style.searchHistoryList} ${style.clearfix}`}>
          <li>男装 &nbsp;&nbsp;&nbsp;&nbsp;<CloseOutlined  className={style.ICON} /></li>
          <li>T台 &nbsp;&nbsp;&nbsp;&nbsp;<CloseOutlined  className={style.ICON} /></li>
        </ul>
      </div>

      <div className={style.searchBorder}>
        <div className={style.searchHistory}>
          <span>已选条件</span>
        </div>
        <ul className={`${style.searchHistoryList} ${style.clearfix}`}>
          <li>男装 &nbsp;&nbsp;&nbsp;&nbsp;<CloseOutlined  className={style.ICON} /></li>
          <li>T台 &nbsp;&nbsp;&nbsp;&nbsp;<CloseOutlined  className={style.ICON} /></li>
        </ul>
      </div>

      <div className={`${style.ulList} ${style.clearfix}`}>
        <h4>性别</h4>
        <ul>
          <li>
            <img src={img6} />
            <p>男装</p>
            <div className={`${style.markmin} ${style.markminOn}`}></div>
            <CheckCircleFilled className={style.checkOn} style={{display:'block'}}/>
          </li>
          <li>
            <img src={img5} />
            <p>女装</p>
            <div className={style.markmin}></div>
            <CheckCircleFilled className={style.checkOn}/>
          </li>
          <li>
            <img src={img7} />
            <p>童装</p>
            <div className={style.markmin}></div>
            <CheckCircleFilled className={style.checkOn}/>
          </li>
        </ul>
      </div>

      <div className={`${style.ulList} ${style.clearfix}`}>
        <h4>类别</h4>
        <ul>
          <li>
            <img src={img8} />
            <p>T台</p>
            <div className={style.markmin}></div>
            <CheckCircleFilled className={style.checkOn}/>
          </li>
          <li>
            <img src={img11} />
            <p>款式</p>
            <div className={style.markmin}></div>
            <CheckCircleFilled className={style.checkOn}/>
          </li>
          <li>
            <img src={img12} />
            <p>街拍</p>
            <div className={style.markmin}></div>
            <CheckCircleFilled className={style.checkOn}/>
          </li>
          <li className={style.pictrueP}>
            <img src={img9} />
            <p>图案</p>
            <div className={style.markmin}></div>
            <CheckCircleFilled className={style.checkOn}/>
          </li>
          <li className={style.pictrueP}>
            <img src={img10} />
            <p>手绘</p>
            <div className={style.markmin}></div>
            <CheckCircleFilled className={style.checkOn}/>
          </li>
        </ul>
      </div>

      <div className={`${style.ulList} ${style.clearfix}`}>
        <h4>季节</h4>
        <Select bordered={false} maxTagTextLength="100" style={{ width: 120 ,fontWeight:'bold',marginBottom:'20px'}} defaultValue="2020">
          <Option value="2020">2020</Option>
          <Option value="2019">2019</Option>
          <Option value="2018">2018</Option>
        </Select>
        <ul>
          <li>
            <img src={img1} />
            <p>2020早春</p>
            <div className={style.markmin}></div>
            <CheckCircleFilled className={style.checkOn}/>
          </li>
          <li>
            <img src={img3} />
            <p>2020春夏</p>
            <div className={style.markmin}></div>
            <CheckCircleFilled className={style.checkOn}/>
          </li>
          <li>
            <img src={img2} />
            <p>2020早秋</p>
            <div className={style.markmin}></div>
            <CheckCircleFilled className={style.checkOn}/>
          </li>
          <li>
            <img src={img4} />
            <p>2020秋冬</p>
            <div className={style.markmin}></div>
            <CheckCircleFilled className={style.checkOn}/>
          </li>
        </ul>
      </div>

      <div className={`${style.searchCountry} ${style.clearfix}`}>
        <div className={`${style.searchCountryTitle} ${style.clearfix}`}>
          <h4>地区</h4>
          <input type="text"/>
        </div>
        <ul className={`${style.searchCountryDZ} ${style.clearfix}`}>
          <li>亚洲</li>
          <li>欧洲</li>
          <li>北美洲</li>
          <li>南美洲</li>
        </ul>
        <ul className={`${style.searchCountryGJ}`}>
          <li className={style.clearfix}>
            <p>亚洲</p>
            <ul className={`${style.searchCountryFL} ${style.clearfix}`}>
              <li></li>
            </ul>
          </li>
          <li className={style.clearfix}>
            <p>中国</p>
            <ul className={`${style.searchCountryFL} ${style.clearfix}`}>
              <li className={style.on}>上海</li>
              <li>香港</li>
            </ul>
          </li>
          <li className={style.clearfix}>
            <p>日本</p>
            <ul className={`${style.searchCountryFL} ${style.clearfix}`}>
              <li>东京</li>
            </ul>
          </li>
          <li className={style.clearfix}>
            <p>韩国</p>
            <ul className={`${style.searchCountryFL} ${style.clearfix}`}>
              <li>首尔</li>
            </ul>
          </li>
        </ul>
      </div>
      <div className={`${style.searchBrand}`}>
        <div className={`${style.searchBrandTitle} ${style.clearfix}`}>
          <h4>品牌</h4>
          <input type="text" />
        </div>

        <ul className={`${style.searchBrandLetter} ${style.clearfix}`}>
          <li className={style.on}>A</li>
          <li>B</li>
          <li>C</li>
          <li>D</li>
          <li>E</li>
          <li>F</li>
          <li>G</li>
          <li>H</li>
          <li>I</li>
          <li>J</li>
          <li>K</li>
          <li>L</li>
          <li>M</li>
          <li>N</li>
          <li>O</li>
          <li>P</li>
          <li>Q</li>
          <li>R</li>
          <li>S</li>
          <li>T</li>
          <li>U</li>
          <li>V</li>
          <li>W</li>
          <li>X</li>
          <li>Y</li>
          <li>Z</li>
        </ul>
        <p className={style.on}>A</p>
        <ul className={`${style.searchBandList} ${style.clearfix}`}>
          <li>A Kind of Guise</li>
          <li className={style.on}>ALa Garcone</li>
          <li>A Kind of Guise</li>
          <li>ALa Garcone</li>
          <li>A Kind of Guise</li>
          <li>ALa Garcone</li>
          <li>A Kind of Guise</li>
          <li>ALa Garcone</li>
        </ul>
      </div>
    </div>;
  }

  handleLogin=()=>{
    this.setState({
      loginMark:'block'
    })
  };
  handleSetLoginMark=(loginMark)=>{
    this.setState({
      loginMark
    })
  };

  handleShowNickName=()=>{
    const nickname = localStorage.getItem('nickname');
    if(nickname){
      this.setState({
        nickname,
        loginFlag: true
      })
    }
  };

  render() {
    return (
      <div>
        {/* pc 大于等于1024 >ipad */}
        <Row className={style.pc_container} style={{borderBottom:'1px solid #333'}} ref={(c) => {
          this.headerDom = c;
        }}>
          <Col span={2} className={style.logo}>
            千尚
          </Col>
          <Col span={8}>
            <Menu
              onClick={this.handleClick}
              selectedKeys={[this.state.current]}
              mode="horizontal"
              className={style.menu}
              style={{border:'0'}}
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
          <Col span={12} className={style.search}>
            <div className={style.searchInput}>
              <ul className={style.clearfix}>
                <input type="text" style={{width:'100%',border:'0',background:'transparent'}} onFocus={this.showSearchNav} onBlur={this.hideSearchNav}/>
                {/* <li>男装&nbsp;&nbsp;<CloseOutlined className={style.searchInputColse}/></li>
                <li>2020早秋&nbsp;&nbsp;<CloseOutlined className={style.searchInputColse}/></li>
                <li>
                  <input type="text" onFocus={this.showSearchNav} onBlur={this.hideSearchNav}/>

              </li> */}
              </ul>
              <SearchOutlined className={style.ICONSearch}/>
            </div>
             {this.renderSearchDom()}
          </Col>
          <Col span={2} className={style.user}>
            {
              this.state.loginFlag ? (<div className={style.PCuserName}>hello {this.state.nickname}</div>)
                : (<ul style={{}}>
                      <li onClick={this.handleLogin}>登录</li>
                      <Link to="/member/register"><li>注册</li></Link>
                    </ul>
                )
            }
          </Col>
          {/* <div span={24} className={style.moreSearchList}>
            <h4>搜索资源</h4>
            <ul>
              <li>
                男装&nbsp;&nbsp;<CloseOutlined />
              </li>
              <li>
                男装&nbsp;&nbsp;<CloseOutlined />
              </li>
              <li>
                男装&nbsp;&nbsp;<CloseOutlined />
              </li>
              <li>
              <input type="text"/>
              </li>
              <li><button>搜索</button></li>
            </ul>
          </div> */}
        </Row>

        <div className={style.pcHeaderHeight} style={{height:`${this.state.headerHeight}px`,marginBottom:"20px"}}></div>

        {/* m 小于1023 */}
        <Row className={style.m_container} style={{height:"60px"}}>
            <Col md={2} sm={3} xs={3} className={style.logo}>千尚</Col>
            <Col  md={20} sm={18} xs={18} className={style.search}>
              <div className={style.searchInputMobile}>
                <input type="text"/>
                <SearchOutlined className={style.ICONSearch}/>
              </div>
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

          {/* 登陆 弹窗 */}
        <div className={style.loginMark} style={{
          display: this.state.loginMark
        }}>
          <Login
            handleSetLoginMark={this.handleSetLoginMark}
            handleShowNickName={this.handleShowNickName}
          />
        </div>
      </div>
    );
  }
}
export default HeaderComponent;
