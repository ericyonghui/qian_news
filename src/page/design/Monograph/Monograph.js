import React, { Component } from "react";
import { Row, Col, Tabs } from "antd";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import style from "./Monograph.less";

const { TabPane } = Tabs;
function onChange(a, b, c) {
  console.log(a, b, c);
}

export default class Monograph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "right",
      list: [
        {
          src: img1,
          id: "1"
        },
        {
          src: img2,
          id: "2"
        },
        {
          src: img1,
          id: "3"
        },
        {
            src: img2,
            id: "4"
          }
      ],
    };
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
            style={{ background: "#eee", textAlign: "center" }}
          >
            <Tabs
              defaultActiveKey="1"
              tabPosition={this.state.mode}
              style={{ height: 600 }}
            >
              {this.state.list.map((item,i) => (
                <TabPane tab={<img src={item.src} className={style.pictrueMin} />} key={item.id} style={{margin:'0'}}>
                  <img src={item.src} className={style.pictrueMax}/>
                </TabPane>
              ))}
            </Tabs>
          </Col>
        </Row>
      </div>
    );
  }
}
