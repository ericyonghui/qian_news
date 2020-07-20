import React from "react";
import { Row, Col } from "antd";
import { AppstoreOutlined ,LeftOutlined ,RightOutlined,UpOutlined,DownOutlined} from "@ant-design/icons";

import style from "./swiperPicture.less"
import img1 from "../../../assets/11.jpg"
import img2 from "../../../assets/2.jpg"

export default class SwiperPicture extends React.Component {
  constructor() {
    super();
    this.state = {
      list:[
        {
          src:img1,
          id:"01",
          num:"001",
        },
        {
          src:img2,
          id:"02",
          num:"002",
        },
        {
          src:img1,
          id:"03",
          num:"003",
        },
        {
          src:img2,
          id:"04",
          num:"004",
        }
      ]
    };
  }
  render() {
    return (
      <div>
        <Row>
          <Col xl={6} lg={6} md={6} sm={24} xs={24}>
            <h3>千尚 秀场直击</h3>
            <p>米兰</p>
            <p>Autumn/Winter2020</p>
            <h4>Antonio Marras</h4>
            <p>全部</p>
            <div>
              <AppstoreOutlined />
              <span>浏览完整系列</span>
            </div>
          </Col>
          <Col xl={18} lg={18} md={18} sm={24} xs={24} className={style.picContainer}>
            <div className={style.max}>
                <LeftOutlined />
                <img src={img1} />
                <RightOutlined />
            </div>
            <div className={style.min}>
            <UpOutlined />
              <ul>
              {
                this.state.list.map(item=>(
                  <li key={item.id}>
                    <img src={item.src} alt=""/>
                    {/* 黑色蒙层 */}
                    <div className={style.mark}>
                      <p>{item.num}</p>
                    </div>
                  </li>
                ))
              }
              </ul>
              <DownOutlined />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
