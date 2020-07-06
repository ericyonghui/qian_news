import React from "react";
import router from 'umi/router';
import { Row, Col, Pagination } from "antd";
import style from "./design.less";

function onShowSizeChange(current, pageSize) {
  console.log(current, pageSize);
}
export default class Design extends React.Component {
  state = {
    list: [
      {
        id: "1",
        img: "",
        flag: true,
        title: "Chanel 2020春夏系列",
        info: "Chanel | 2020/21秋冬 ｜巴黎",
        author: "Honor",
        timer: "2020.6.15",
        link: "/Monograph"
      },
      {
        id: "2",
        img: "",
        flag: true,
        title: "Chanel 2020春夏系列",
        info: "Chanel | 2020/21秋冬 ｜巴黎",
        author: "Honor",
        timer: "2020.6.15",
        link:"/Multigraph"
      },
      {
        id: "3",
        img: "",
        flag: true,
        title: "Chanel 2020春夏系列",
        info: "Chanel | 2020/21秋冬 ｜巴黎",
        author: "Honor",
        timer: "2020.6.15"
      },
      {
        id: "4",
        img: "",
        flag: true,
        title: "Chanel 2020春夏系列",
        info: "Chanel | 2020/21秋冬 ｜巴黎",
        author: "Honor",
        timer: "2020.6.15"
      },
      {
        id: "5",
        img: "",
        flag: true,
        title: "Chanel 2020春夏系列",
        info: "Chanel | 2020/21秋冬 ｜巴黎",
        author: "Honor",
        timer: "2020.6.15"
      },
      {
        id: "6",
        img: "",
        flag: true,
        title: "Chanel 2020春夏系列",
        info: "Chanel | 2020/21秋冬 ｜巴黎",
        author: "Honor",
        timer: "2020.6.15"
      },
      {
        id: "7",
        img: "",
        flag: true,
        title: "Chanel 2020春夏系列",
        info: "Chanel | 2020/21秋冬 ｜巴黎",
        author: "Honor",
        timer: "2020.6.15"
      },
      {
        id: "8",
        img: "",
        flag: true,
        title: "Chanel 2020春夏系列",
        info: "Chanel | 2020/21秋冬 ｜巴黎",
        author: "Honor",
        timer: "2020.6.15"
      },
      {
        id: "9",
        img: "",
        flag: true,
        title: "Chanel 2020春夏系列",
        info: "Chanel | 2020/21秋冬 ｜巴黎",
        author: "Honor",
        timer: "2020.6.15"
      },
      {
        id: "10",
        img: "",
        flag: true,
        title: "Chanel 2020春夏系列",
        info: "Chanel | 2020/21秋冬 ｜巴黎",
        author: "Honor",
        timer: "2020.6.15"
      }
    ]
  };

  handleClick=(link)=>{
    router.push(link);
  };

  render() {
    return (
      <div className={style.DesingContainer}>
        {/* >1500px */}
        <Row className={style.lgContainer}>
          {this.state.list.map(item => (
            <Col
              xl={6}
              lg={8}
              md={12}
              sm={24}
              xs={24}
              className={style.list}
              key={item.id}
            >
                <div className={style.item} onClick={()=>{this.handleClick(item.link)}}>
                  <div className={style.pictrue}>
                    <p>img</p>
                    <span className={style.postion}>NEW</span>
                  </div>
                  <div className={style.title}>{item.title}</div>
                  <div className={style.info}>{item.info}</div>
                  <div className={style.author}>
                    <p>{item.author}</p>
                    <p>{item.timer}</p>
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
