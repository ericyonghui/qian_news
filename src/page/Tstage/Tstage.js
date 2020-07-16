import React from "react";
import router from 'umi/router';
import { Row, Col, Pagination } from "antd";
import img1 from "../../assets/11.jpg";
import { HeartFilled, EyeFilled } from "@ant-design/icons";

import style from "./Tstage.less";


function onShowSizeChange(current, pageSize) {
    console.log(current, pageSize);
  }

export default class Tstage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          id: "1",
          src: img1,
          title: "020春夏Chanel女装发布会",
          info: "Chanel | 2020/21秋冬 ｜ 巴黎",
          author: "MR Right",
          time: "2020.6.15",
          href:'/TstageDetail'
        },
        {
          id: "2",
          src: img1,
          title: "020春夏Chanel女装发布会",
          info: "Chanel | 2020/21秋冬 ｜ 巴黎",
          author: "MR Right",
          time: "2020.6.15",
          href:'/TstageDetail'
        },
        {
          id: "3",
          src: img1,
          title: "020春夏Chanel女装发布会",
          info: "Chanel | 2020/21秋冬 ｜ 巴黎",
          author: "MR Right",
          time: "2020.6.15"
        },
        {
          id: "4",
          src: img1,
          title: "020春夏Chanel女装发布会",
          info: "Chanel | 2020/21秋冬 ｜ 巴黎",
          author: "MR Right",
          time: "2020.6.15"
        },
        {
          id: "5",
          src: img1,
          title: "020春夏Chanel女装发布会",
          info: "Chanel | 2020/21秋冬 ｜ 巴黎",
          author: "MR Right",
          time: "2020.6.15"
        },
        {
          id: "6",
          src: img1,
          title: "020春夏Chanel女装发布会",
          info: "Chanel | 2020/21秋冬 ｜ 巴黎",
          author: "MR Right",
          time: "2020.6.15"
        },
        {
          id: "7",
          src: img1,
          title: "020春夏Chanel女装发布会",
          info: "Chanel | 2020/21秋冬 ｜ 巴黎",
          author: "MR Right",
          time: "2020.6.15"
        },
        {
          id: "8",
          src: img1,
          title: "020春夏Chanel女装发布会",
          info: "Chanel | 2020/21秋冬 ｜ 巴黎",
          author: "MR Right",
          time: "2020.6.15"
        },
        {
          id: "9",
          src: img1,
          title: "020春夏Chanel女装发布会",
          info: "Chanel | 2020/21秋冬 ｜ 巴黎",
          author: "MR Right",
          time: "2020.6.15"
        },
        {
          id: "10",
          src: img1,
          title: "020春夏Chanel女装发布会",
          info: "Chanel | 2020/21秋冬 ｜ 巴黎",
          author: "MR Right",
          time: "2020.6.15"
        },
        {
          id: "11",
          src: img1,
          title: "020春夏Chanel女装发布会",
          info: "Chanel | 2020/21秋冬 ｜ 巴黎",
          author: "MR Right",
          time: "2020.6.15"
        },
        {
          id: "12",
          src: img1,
          title: "020春夏Chanel女装发布会",
          info: "Chanel | 2020/21秋冬 ｜ 巴黎",
          author: "MR Right",
          time: "2020.6.15"
        }
      ]
    };
  }
  render() {
    return (
      <div className={style.TstageContainer}>
        <Row>
          {this.state.list.map((item, i) => (
            <Col
              lg={8}
              xl={6}
              md={12}
              sm={24}
              xs={24}
              className={style.list}
              key={item.id}
            >
              <div className={style.stagemain} onClick={()=>{router.push(item.href)}}>
                <div className={`${style.picture}`}>
                  <img src={item.src} />
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
                  <h3 className={style.title}>{item.title}</h3>
                  <p className={style.infomation}>{item.info}</p>
                  <p className={style.anthor}>{item.author}</p>
                  <p className={style.anthor}>{item.time}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <div className={style.pagination}>
          <Pagination
            showSizeChanger
            onShowSizeChange={onShowSizeChange}
            defaultCurrent={1}
            total={500}
          />
        </div>
      </div>
    );
  }
}
