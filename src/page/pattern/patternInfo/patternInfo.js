import React from "react";
import { Row, Col } from "antd";
import {
  LeftOutlined,
  DownloadOutlined,
  EllipsisOutlined,
  HeartOutlined
} from "@ant-design/icons";
import img1 from "../../../assets/1.jpg";
import img2 from "../../../assets/2.jpg";
import img3 from "../../../assets/3.jpg";
import img4 from "../../../assets/4.jpg";
import img5 from "../../../assets/5.jpg";
import img6 from "../../../assets/6.jpg";
import img7 from "../../../assets/7.jpg";

import style from "./patternInfo.less";

export default class patternInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        list: [
            {
              src: img1,
              id: "1",
              link:'/patternInfo'
            },
            {
              src: img2,
              id: "2",
              link:'/patternInfo'
            },
            {
              src: img3,
              id: "3",
              link:'/patternInfo'
            },
            {
              src: img4,
              id: "4",
              link:'/patternInfo'
            },
            {
              src: img5,
              id: "5",
              link:'/patternInfo'
            },
            {
              src: img6,
              id: "6",
              link:'/patternInfo'
            },
            {
              src: img7,
              id: "7",
              link:'/patternInfo'
            },
            {
              src: img3,
              id: "8",
              link:'/patternInfo'
            },
            {
              src: img4,
              id: "9",
              link:'/patternInfo'
            },
            {
              src: img2,
              id: "10",
              link:'/patternInfo'
            },
            {
              src: img1,
              id: "11",
              link:'/patternInfo'
            },
            {
              src: img7,
              id: "12",
              link:'/patternInfo'
            }
          ]
    };
  }
  render() {
    return (
      <div className={style.patternContainer}>
        <Row>
          <Col lg={4} xl={4} md={4} sm={2} xs={2} className={style.goBack}>
            {/*<LeftOutlined />*/}
            {/*<span>返回</span>*/}
          </Col>
          <Col lg={16} xl={16} md={20} sm={21} xs={21} className={`${style.clearfix} ${style.containerPadding}`}>
            <Col lg={12} xl={12} md={12} sm={24} xs={24} className={style.picture}>
              <img src={img1} />
            </Col>
            <Col lg={12} xl={12} md={12} sm={24} xs={24} className={style.info}>
                <div className={`${style.infoIcon} ${style.clearfix}`}>
                    <DownloadOutlined style={{marginRight:"10px"}}/>
                    <EllipsisOutlined />
                    <HeartOutlined style={{float:'right'}}/>
                </div>
                <div className={style.infoList}>
                    <p>由 eric 上传</p>
                    <h3>花卉图案</h3>
                    <ul>
                        <li>格式：JPG</li>
                        <li>尺寸：2000*2000px（300pi）</li>
                        <li>软件：Photoshop</li>
                        <li>版权：共享素材</li>
                    </ul>
                </div>
                <div className={style.infoTip}>
                    <p>标签</p>
                    <ul className={style.clearfix}>
                        <li>花卉</li>
                        <li>国风</li>
                        <li>图案</li>
                    </ul>
                </div>
                <div className={style.anthorUp}>
                    <p>TA的上传</p>
                    <ul>
                        <li><img src={img1} /></li>
                        <li><img src={img2} /></li>
                        <li><img src={img2} /></li>
                        <li><img src={img1} /></li>
                    </ul>
                </div>
            </Col>
          </Col>
        </Row>

        <div className={style.more}>
            <p>更多推荐</p>
            <span></span>
        </div>

        <div className={style.container} style={{marginBottom:"15px"}}>
          {this.state.list.map((item, index) => (
            <div key={item.id} className={style.column}>
              <img src={item.src} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
