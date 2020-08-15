import React, { PureComponent } from "react";
import {lazyLoad} from '../../util/utils';
import { IMG_HOST } from "../../util/common";
import { Row, Col } from "antd";
import { HeartFilled, EyeFilled } from "@ant-design/icons";
import style from "../../page/Runway/index.less";

class RunwayList extends PureComponent {
  componentDidMount() {
    let imgArr = document.querySelectorAll('img');
    lazyLoad(imgArr);
    window.addEventListener('scroll',this.handleImgScroll);
  }
  handleImgScroll=async ()=>{
    let imgArr = document.querySelectorAll('img');
    await lazyLoad(imgArr);
  };

  componentWillUnmount() {
    window.removeEventListener('scroll',this.handleImgScroll);
  }

  renderList() {
    let vDOM = [];
    let {
      data: { list },handleSlideShow,handleLikeChange
    } = this.props;
    if (list.length > 0) {
      list.forEach(item => {
        let {
          key,
          main_id,
          city_cn,
          fashion_season,
          release_date,
          brand_name,
          gender,
          img,
          like_size,
          view_size,
          likeFlag
        } = item;
        vDOM.push(
          <Col
            xl={4}
            lg={6}
            md={8}
            sm={24}
            xs={24}
            className={style.list}
            key={key}
          >
            <div className={style.stagemain}>
              <div className={`${style.picture}`}>
                <img data-src={`${IMG_HOST}/webp${img}`} alt="" />
                <span className={style.newPosition}>NEW</span>
                <span className={style.downPostion}>下载</span>

                  <ul className={`${style.iconPosition} ${style.clearfix}`}>
                    <li>
                      {
                        likeFlag ===1 ? (
                          <HeartFilled className={style.heartIcon} style={{color:"#ff0000"}} onClick={() => {handleLikeChange(main_id,likeFlag)}}/>
                        ):(<HeartFilled className={style.heartIcon}  onClick={() => {handleLikeChange(main_id,likeFlag)}}/>)
                      }
                      <span>{like_size}</span>
                    </li>
                    <li>
                      <EyeFilled className={style.eyeIcon} />
                      <span>{view_size}</span>
                    </li>
                  </ul>

              </div>
              <div className={style.info} onClick={() => {handleSlideShow(main_id)}}>
                <h3
                  className={style.title} title={`${release_date}${fashion_season}${brand_name}${gender === "women" ? "女装" : "男装"}发布会`}
                >{`${release_date}${fashion_season}${brand_name}${
                  gender === "women" ? "女装" : "男装"
                }发布会`}</h3>
                <div className={style.infomation}>
                  <span>{brand_name} &nbsp;| &nbsp;</span>
                  <span>{`${release_date}${fashion_season}`} &nbsp;|&nbsp;</span>
                  <span>{city_cn}</span>
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
export default RunwayList;
