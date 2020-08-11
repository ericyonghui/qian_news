import React, { PureComponent } from 'react';
import router from 'umi/router';
import { Row, Col, Menu, Input ,Select} from "antd";
import { MenuUnfoldOutlined ,CloseCircleOutlined,SearchOutlined} from "@ant-design/icons";
import style from "./header.less";
const { Search } = Input;
const { Option } = Select;
import img1 from "../../page/IMG/季节/季节-2020早春.png"
import img2 from "../../page/IMG/季节/季节-2020早秋.jpg"
import img3 from "../../page/IMG/季节/季节-2020春夏.jpg"
import img4 from "../../page/IMG/季节/季节-2020秋冬.jpg"
import img5 from "../../page/IMG/性别/性别-女装.jpg"
import img6 from "../../page/IMG/性别/性别-男装.png"
import img7 from "../../page/IMG/性别/性别-童装.jpg"
import img8 from "../../page/IMG/类别/类别-T台.png"
import img9 from "../../page/IMG/类别/类别-图案.jpg"
import img10 from "../../page/IMG/类别/类别-手绘.png"
import img11 from "../../page/IMG/类别/类别-款式.jpg"
import img12 from "../../page/IMG/类别/类别-街拍.png"
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
    display:'none'
  };

  componentDidMount(){
    // let str = window.location.pathname;
    // let pathname=str.substring(1,str.length);
    // let res = routerArr.filter(item=>{return item.routerKey === pathname});
    // if(res[0].routerVal!==''){
    //   router.push(res[0].routerVal);
    // } else {
    //   router.push(`/home`);
    // }
    // this.setState({
    //   current: pathname
    // });
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
            {/* <Search
              placeholder="input search text"
              onSearch={value => console.log(value)}
              enterButton
            /> */}
            <div className={style.searchInput}>
              <input type="text"/>
              <SearchOutlined className={style.ICONSearch}/>
            </div>
            <div className={style.searchList}>
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
                      <img src={img6} />
                      <span>男装</span>
                    </li>
                    <li>
                      <img src={img5} />
                      <span>女装</span>
                    </li>
                    <li>
                      <img src={img7} />
                      <span>童装</span>
                    </li>
                  </ul>
              </div>

              <div className={`${style.ulList} ${style.clearfix}`}>
                <h4>类别</h4>
                  <ul>
                    <li>
                      <img src={img8} />
                      <span>T台</span>
                    </li>
                    <li>
                      <img src={img11} />
                      <span>款式</span>
                    </li>
                    <li>
                      <img src={img12} />
                      <span>街拍</span>
                    </li>
                    <li>
                      <img src={img9} />
                      <span>图案</span>
                    </li>
                    <li>
                      <img src={img10} />
                      <span>手绘</span>
                    </li>
                  </ul>
              </div>

              <div className={`${style.ulList} ${style.clearfix}`}>
                <h4>季节</h4>
                  <ul>
                    <li>
                      <img src={img1} />
                      <span>2020早春</span>
                      <div className={style.markmin}></div>
                    </li>
                    <li>
                      <img src={img3} />
                      <span>2020春夏</span>
                      <div className={style.markmin}></div>
                    </li>
                    <li>
                      <img src={img2} />
                      <span>2020早秋</span>
                      <div className={style.markmin}></div>
                    </li>
                    <li>
                      <img src={img4} />
                      <span>2020秋冬</span>
                      <div className={style.markmin}></div>
                    </li>
                  </ul>
              </div>

              <div className={style.searchYear}>
                <h4>年份</h4>
                <Select bordered={false} maxTagTextLength="100" style={{ width: 120 }} defaultValue="2020">
                  <Option value="2020">2020</Option>
                  <Option value="2019">2019</Option>
                  <Option value="2018">2018</Option>
                </Select>
              </div>
              <div className={`${style.searchCountry} ${style.clearfix}`}>
                <h4>国家</h4>
                <ul>
                  <li>中国</li>
                  <li>日本</li>
                </ul>
              </div>
              <div className={`${style.searchBrand}`}>
                  <h4>品牌</h4>
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
                  <p>A</p>
                  <ul className={`${style.searchBandList} ${style.clearfix}`}>
                    <li>A Kind of Guise</li>
                    <li>ALa Garcone</li>
                    <li>A Kind of Guise</li>
                    <li>ALa Garcone</li>
                    <li>A Kind of Guise</li>
                    <li>ALa Garcone</li>
                    <li>A Kind of Guise</li>
                    <li>ALa Garcone</li>
                  </ul>
              </div>
            </div>
          </Col>
          <Col span={2} className={style.user}>
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
              <div className={style.searchInput}>
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
      </div>
    );
  }
}
export default HeaderComponent;
