import React, { PureComponent } from "react";
import LazyLoad from "react-lazyload";
import { IMG_HOST } from "../../util/common";
import { Row, Col } from "antd";
import { HeartFilled, EyeFilled } from "@ant-design/icons";
import style from "../../page/Runway/index.less";

class StreetSnapList extends PureComponent {
  componentDidMount() {}

  renderTag(street_snap_type,street_snap_place){
    let newPlace='';
    if(street_snap_place && street_snap_place!==''){
      newPlace = street_snap_place;
    } else {
      if(street_snap_type ===1){
        newPlace ='欧美';
      } else if(street_snap_type ===2){
        newPlace ='明星';
      } else if(street_snap_type ===3){
        newPlace ='亚洲';
      } else if(street_snap_type ===4){
        newPlace ='国内';
      } else if(street_snap_type ===5){
        newPlace ='其他';
      }
    }
    return newPlace;
  }
  renderList() {
    let vDOM = [];
    let {
      data: { list }
    } = this.props;
    if (list.length > 0) {
      list.forEach(item => {
        let {
          key,
          main_id,
          street_snap_type,
          street_snap_place,
          img
        } = item;
        vDOM.push(
          <Col
            xl={6}
            lg={8}
            md={12}
            sm={24}
            xs={24}
            className={style.list}
            key={key}
          >
            <div className={style.stagemain} onClick={() => {}}>
              <div className={`${style.picture}`}>
                <LazyLoad  height={0}>
                  <img src={`${IMG_HOST}/webp${img}`} alt="" />
                </LazyLoad>
                <span className={style.newPosition}>NEW</span>
                <span className={style.downPostion}>下载</span>

                  <ul className={`${style.iconPosition} ${style.clearfix}`}>
                    <li>
                      <HeartFilled />
                      <span>270</span>
                    </li>
                    <li>
                      <EyeFilled />
                      <span>270</span>
                    </li>
                  </ul>

              </div>
              <div className={style.info}>
                <p
                  className={style.infomation}
                >{`${this.renderTag(street_snap_type,street_snap_place)}|2020|春夏`}</p>
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
export default StreetSnapList;
