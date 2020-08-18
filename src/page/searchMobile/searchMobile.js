import React from "react";
import router from "umi/router";
import { Link } from "react-router-dom";
import { CheckCircleFilled, CloseOutlined } from "@ant-design/icons";
import { Select } from "antd";

import Header from "../../components/header/header";
import style from "./searchMobile.less";
// import style from "./header.less";

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

export default class searchMobile extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className={style.container}>
          {/* 最近搜索 */}
          <div className={style.searchBorder}>
            <div className={style.searchHistory}>
              <span>最近搜索</span>
            </div>
            <ul className={`${style.searchHistoryList} ${style.clearfix}`}>
              <li>
                男装 &nbsp;&nbsp;&nbsp;&nbsp;
                <CloseOutlined className={style.ICON} />
              </li>
              <li>
                T台 &nbsp;&nbsp;&nbsp;&nbsp;
                <CloseOutlined className={style.ICON} />
              </li>
            </ul>
          </div>
          {/* 已选条件 */}
          <div className={style.searchBorder}>
            <div className={style.searchHistory}>
              <span>已选条件</span>
            </div>
            <ul className={`${style.searchHistoryList} ${style.clearfix}`}>
              <li>
                男装 &nbsp;&nbsp;&nbsp;&nbsp;
                <CloseOutlined className={style.ICON} />
              </li>
              <li>
                T台 &nbsp;&nbsp;&nbsp;&nbsp;
                <CloseOutlined className={style.ICON} />
              </li>
            </ul>
          </div>
          {/* 性别 */}
          <div className={`${style.ulList} ${style.clearfix}`}>
            <h4>性别</h4>
            <ul>
              <li>
                <img src={img6} />
                <p>男装</p>
                <div className={`${style.markmin} ${style.markminOn}`}></div>
                <CheckCircleFilled
                  className={style.checkOn}
                  style={{ display: "block" }}
                />
              </li>
              <li>
                <img src={img5} />
                <p>女装</p>
                <div className={style.markmin}></div>
                <CheckCircleFilled className={style.checkOn} />
              </li>
              <li>
                <img src={img7} />
                <p>童装</p>
                <div className={style.markmin}></div>
                <CheckCircleFilled className={style.checkOn} />
              </li>
            </ul>
          </div>
          {/* 类别 */}
          <div className={`${style.ulList} ${style.clearfix}`}>
            <h4>类别</h4>
            <ul>
              <li>
                <img src={img8} />
                <p>T台</p>
                <div className={style.markmin}></div>
                <CheckCircleFilled className={style.checkOn} />
              </li>
              <li>
                <img src={img11} />
                <p>款式</p>
                <div className={style.markmin}></div>
                <CheckCircleFilled className={style.checkOn} />
              </li>
              <li>
                <img src={img12} />
                <p>街拍</p>
                <div className={style.markmin}></div>
                <CheckCircleFilled className={style.checkOn} />
              </li>
              <li className={style.pictrueP}>
                <img src={img9} />
                <p>图案</p>
                <div className={style.markmin}></div>
                <CheckCircleFilled className={style.checkOn} />
              </li>
              <li className={style.pictrueP}>
                <img src={img10} />
                <p>手绘</p>
                <div className={style.markmin}></div>
                <CheckCircleFilled className={style.checkOn} />
              </li>
            </ul>
          </div>
          {/* 季节 */}
          <div className={`${style.ulList} ${style.clearfix}`}>
            <h4>季节</h4>
            <Select
              bordered={false}
              maxTagTextLength="100"
              style={{ width: 120, fontWeight: "bold", marginBottom: "20px" }}
              defaultValue="2020"
            >
              <Option value="2020">2020</Option>
              <Option value="2019">2019</Option>
              <Option value="2018">2018</Option>
            </Select>
            <ul>
              <li>
                <img src={img1} />
                <p>2020早春</p>
                <div className={style.markmin}></div>
                <CheckCircleFilled className={style.checkOn} />
              </li>
              <li>
                <img src={img3} />
                <p>2020春夏</p>
                <div className={style.markmin}></div>
                <CheckCircleFilled className={style.checkOn} />
              </li>
              <li>
                <img src={img2} />
                <p>2020早秋</p>
                <div className={style.markmin}></div>
                <CheckCircleFilled className={style.checkOn} />
              </li>
              <li>
                <img src={img4} />
                <p>2020秋冬</p>
                <div className={style.markmin}></div>
                <CheckCircleFilled className={style.checkOn} />
              </li>
            </ul>
          </div>
          {/* 国家 */}
          <div className={`${style.searchCountry} ${style.clearfix}`}>
            <div className={`${style.searchCountryTitle} ${style.clearfix}`}>
              <h4>地区</h4>
              <input type="text" />
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
          {/* 品牌 */}
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
      </div>
    );
  }
}
