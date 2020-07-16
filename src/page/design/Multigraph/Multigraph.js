import React from "react";
import { Row, Col, Pagination } from "antd";

import style from "./Multigraph.less";
import img1 from "../../../assets/11.jpg";



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
          img: img1
        },
        {
          id: "2",
          img: img1
        },
        {
          id: "3",
          img: img1
        },
        {
          id: "4",
          img: img1
        },
        {
          id: "5",
          img: img1
        },
        {
          id: "6",
          img: img1
        },
        {
          id: "7",
          img: img1
        },
        {
          id: "8",
          img:img1
        },
        {
          id: "9",
          img: img1
        },
        {
          id: "10",
          img: img1
        },
        {
          id: "11",
          img: img1
        },
        {
          id: "12",
          img: img1
        },
        {
          id: "13",
          img: img1
        },
        {
          id: "14",
          img: img1
        },
        {
          id: "15",
          img:img1
        },
        {
          id: "16",
          img: img1
        },
        {
          id: "17",
          img: img1
        },
        {
          id: "18",
          img: img1
        }
      ]
    };
  }
  render() {
    return (
      <div className={style.MultiggarphContainer}>
        {/* title */}
        <div className={style.container}>
          <Row className={`${style.nav} ${style.clearfix}`}>
            <Col xl={3} lg={4} md={4} xs={24} sm={24} className={style.picture}>
              <p><img src={img1} alt=""/></p>
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
                  <img src={item.img} alt=""/>
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
