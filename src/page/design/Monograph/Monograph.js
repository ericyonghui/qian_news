import React, { Component } from "react";
import { Row, Col, Tabs } from "antd";
import {
  LeftOutlined,
  RightOutlined,
  DownOutlined,
  UpOutlined
} from "@ant-design/icons";
import img1 from "../../../assets/11.jpg";
import img2 from "../../../assets/2.jpg"
import style from "./Monograph.less";

export default class Monograph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "right",
      currentIndex: "0",
      list: [
        {
          src: img1,
          id: "1",
          index: 0
        },
        {
          src: img2,
          id: "2",
          index: 1
        },
        {
          src: img1,
          id: "3",
          index: 2
        },
        {
          src: img2,
          id: "4",
          index: 3
        },
        {
          src: img1,
          id: "5",
          index: 4
        },
        {
          src: img1,
          id: "6",
          index: 5
        }
      ],
      picMax:
        {
          src: img1,
          id: "1",
          index: 0
        }
      
    };
  }

  clickHandle = (i) =>{
    this.setState({
      picMax:this.state.list[i]
    })
    
  }

  render() {
    return (
      <div>
        <Row className={style.container}>
          <Col lg={4} xl={4} md={4} xs={24} sm={24} className={style.info}>
            <h3>欧美街拍</h3>
            <p>AutAutumn 2020 米兰 </p>
          </Col>

          <Col
            lg={20}
            xl={20}
            md={20}
            xs={24}
            sm={24}
            style={{
              background: "#eee",
              textAlign: "center",
              position: "relative"
            }}
          >
            <div className={style.maxPicture} style={{height:'800px'}}>
              <LeftOutlined className={style.maxLeft} />
                <img src={this.state.picMax.src} />
              
              <RightOutlined className={style.maxRight} />
            </div>

            <div className={style.minPicture}>
              <div style={{height:'600px'}}>
              <UpOutlined className={style.upIcon} />
                {
                  this.state.list.map((item,index)=>(
                    
                    <div key={item.id} onClick={()=>{this.clickHandle(index)}}>
                      <img src={item.src} />
                    </div>
                    
                  ))
                }
                <DownOutlined className={style.downIcon} />
              </div>
              
              {/* <ul>
                {
                  this.state.list.map((item,index)=>(
                    <li key={item.id} onClick={()=>{this.clickHandle(index)}}>
                      <img src={item.src} />
                    </li>
                  ))
                }
              </ul> */}
              
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
