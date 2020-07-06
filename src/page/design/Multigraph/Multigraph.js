import React from "react";
import { Row, Col, Pagination } from "antd";

import style from "./Multigraph.less";

function onShowSizeChange(current, pageSize) {
    console.log(current, pageSize);
  }
export default class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      List: [
        {
          id: "1",
          img: "img"
        },
        {
          id: "2",
          img: "img"
        },
        {
          id: "3",
          img: "img"
        },
        {
          id: "4",
          img: "img"
        },
        {
          id: "5",
          img: "img"
        },
        {
          id: "6",
          img: "img"
        },
        {
          id: "7",
          img: "img"
        },
        {
          id: "8",
          img: "img"
        },
        {
          id: "9",
          img: "img"
        },
        {
          id: "10",
          img: "img"
        },
        {
          id: "11",
          img: "img"
        },
        {
          id: "12",
          img: "img"
        },
        {
          id: "13",
          img: "img"
        },
        {
          id: "14",
          img: "img"
        },
        {
          id: "15",
          img: "img"
        },
        {
          id: "16",
          img: "img"
        },
        {
          id: "17",
          img: "img"
        },
        {
          id: "18",
          img: "img"
        }
      ]
    };
  }
  render() {
    return (
      <div>
        {/* title */}
        <div className={style.container}>
          <Row className={`${style.nav} ${style.clearfix}`}>
            <Col xl={3} lg={4} md={4} xs={24} sm={24} className={style.picture}>
              <p>img</p>
            </Col>
            <Col xl={21} lg={20} md={20} xs={24} sm={24} className={style.info}>
              <h2>PRADA 2020春夏系列</h2>
              <p>AlexAlexander McQeen | 2020 春夏 ｜ 米兰</p>
            </Col>
          </Row>
        </div>
        {/* list */}
        <div className={style.list}>
          <Row>
            {this.state.List.map(item => {
              return (
                <Col
                  xl={3}
                  lg={4}
                  md={6}
                  sm={12}
                  xs={12}
                  className={style.item}
                  key={item.id}
                >
                  <p>{item.img}</p>
                </Col>
              );
            })}
          </Row>
          <div className={style.pagination}>
          <Pagination
            showSizeChanger
            onShowSizeChange={onShowSizeChange}
            defaultCurrent={3}
            total={500}
          />
          </div>
          
        </div>
      </div>
    );
  }
}
