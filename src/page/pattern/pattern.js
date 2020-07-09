import React from "react";
import { Pagination } from "antd";
import router from "umi/router"

import style from "./pattern.less";
import img1 from "../../assets/1.jpg";
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/3.jpg";
import img4 from "../../assets/4.jpg";
import img5 from "../../assets/5.jpg";
import img6 from "../../assets/6.jpg";
import img7 from "../../assets/7.jpg";


function onShowSizeChange(current, pageSize) {
    console.log(current, pageSize);
  }

export default class Pattern extends React.Component {
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
          src: img5,
          id: "8",
          link:'/patternInfo'
        },
        {
          src: img4,
          id: "9",
          link:'/patternInfo'
        },
        {
          src: img3,
          id: "10",
          link:'/patternInfo'
        },
        {
          src: img2,
          id: "11",
          link:'/patternInfo'
        },
        {
          src: img1,
          id: "12",
          link:'/patternInfo'
        }
      ]
    };
  }
  handleClick= (link) =>{
    router.push(link);
  }

  render() {
    return (
      <div className={style.patternContainer}>
        <div className={style.container}>
          {this.state.list.map((item, index) => (
            <div key={item.id} className={style.column} onClick={()=>{this.handleClick(item.link)}}>
                <span className={style.tip}>NEW</span>
              <img src={item.src} />
            </div>
          ))}
        </div>

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
