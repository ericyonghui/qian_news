import React from "react";
import router from "umi/router";
import { Link } from "react-router-dom";
import { CloseCircleOutlined } from "@ant-design/icons";
import { Select } from "antd";

import Header from "../../components/header/header";
import style from "./searchMobile.less";

export default class searchMobile extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className={style.container}>
          <div className={style.searchHistory}>
            <span>最近搜索</span>
            <CloseCircleOutlined className={style.ICON} />
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

          <div className={style.searchYear}>
            <h4>年份</h4>
            <Select
              bordered={false}
              maxTagTextLength="100"
              style={{ width: 120 }}
              defaultValue="2020"
            >
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
      </div>
    );
  }
}
