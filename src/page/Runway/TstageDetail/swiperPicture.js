import React from "react";
import { Row, Col } from "antd";
import { AppstoreOutlined ,LeftOutlined ,RightOutlined,UpOutlined,DownOutlined,DownCircleOutlined} from "@ant-design/icons";

import style from "./swiperPicture.less"
import img1 from "../../../assets/11.jpg"
import img2 from "../../../assets/2.jpg"

export default class SwiperPicture extends React.Component {
  constructor() {
    super();
    this.state = {
      ulHeight:'',
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
  getImgHeightHandle=()=>{
    this.ulHeight=document.getElementById('img').height() - 60 + "px";

  }
  render() {
    return (
      <div>
        <Row className={style.container}>
          <Col xl={4} lg={4} md={4} sm={24} xs={24} className={style.info}>
          <h4 className={style.infoTitle}>Antonio Marras</h4> 
            <p className={style.infoAdress}>Autumn/Winter2020  米兰</p>
            <p className={style.infoAllIcon}><span className={style.infoRight}>全部</span>  <DownCircleOutlined /></p>
            <div className={style.infoTab}>
              <AppstoreOutlined />&nbsp;
              <span>浏览完整系列</span>
            </div>
          </Col>
          <Col xl={20} lg={20} md={20} sm={24} xs={24} className={style.picContainer}>
            <div className={style.max}>
                <LeftOutlined className={style.maxLeft} />
                <img src={img1} id="img"/>
                <RightOutlined className={style.maxright} />
            </div>
            <div className={style.min}>
              <div className={style.minIcon}>
                <UpOutlined style={{fontSize:'20px'}}/>
              </div>
              
              <ul className={style.minList}>
              {
                this.state.list.map(item=>(
                  <li key={item.id}>
                    <img src={item.src} alt=""/>
                    
                    <div className={style.mark}>
                      <p>{item.num}</p>
                    </div>
                  </li>
                ))
              }
              </ul>
              <div className={style.minIcon}>
              <DownOutlined />
              </div>
              
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
