import React, { PureComponent } from "react";
import LazyLoad from "react-lazyload";
import { IMG_HOST } from "../../util/common";
import { Row, Col } from "antd";
import { HeartFilled, EyeFilled } from "@ant-design/icons";
import style from "../../page/Runway/index.less";

class StyleList extends PureComponent {
  componentDidMount() {}

  renderList() {
    let vDOM = [];
    let {
      data: { list },handleSlideShow
    } = this.props;
    if (list.length > 0) {
      list.forEach(item => {
        let {
          key,
          primary_key,
          brand_name,
          fashion_season,
          fashion_region,
          gender,
          img
        } = item;
        vDOM.push(
          <Col
            xl={4}
            lg={5}
            md={8}
            sm={24}
            xs={24}
            className={style.list}
            key={key}
          >
            <div className={style.stagemain} onClick={() => {handleSlideShow(primary_key,fashion_season,fashion_region,brand_name)}}>
              <div className={`${style.picture}`}>
                <LazyLoad  height={0}>
                  <img src={`http://106.37.96.145:2019${img}`} alt="" />
                </LazyLoad>
                <span className={style.newPosition}>NEW</span>
                <span className={style.downPostion}>下载</span>
                <ul className={`${style.iconPosition} ${style.clearfix}`}>
                    <li>
                      <HeartFilled className={style.heartIcon} />
                      <span>270</span>
                    </li>
                    <li>
                      <EyeFilled className={style.eyeIcon} />
                      <span>270</span>
                    </li>
                  </ul>

              </div>
              <div className={style.info}>
                <h3
                  className={style.title} title={`${brand_name}${fashion_season}${gender === "women" ? "女装" : (gender === "men" ? "男装": "童装")}系列`}
                >{`${brand_name}${fashion_season}${gender === "women" ? "女装" : (gender === "men" ? "男装": "童装")}系列`}</h3>
                <div className={style.infomation}>
                  <span>{brand_name} &nbsp;| &nbsp;</span>
                  <span>{fashion_season} &nbsp;|&nbsp;</span>
                  <span>{fashion_region}</span>
                </div>
                <p className={style.anthor}>MR Right</p>
                <p className={style.anthor}>2020.7.17</p>
              </div>
            </div>
          </Col>
        );
      });
    }
    return vDOM;
  }

  render() {
    return <Row type="flex">{this.renderList()}</Row>;
  }
}
export default StyleList;
