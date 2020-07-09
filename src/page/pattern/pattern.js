import React from "react";
import { Pagination } from "antd";
import router from "umi/router"

import style from "./pattern.less";
import img1 from "./1.jpg";
import img2 from "./2.jpg";


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
          src: img1,
          id: "3",
          link:'/patternInfo'
        },
        {
          src: img2,
          id: "4",
          link:'/patternInfo'
        },
        {
          src: img2,
          id: "5",
          link:'/patternInfo'
        },
        {
          src: img1,
          id: "6",
          link:'/patternInfo'
        },
        {
          src: img1,
          id: "7",
          link:'/patternInfo'
        },
        {
          src: img2,
          id: "8",
          link:'/patternInfo'
        },
        {
          src: img1,
          id: "9",
          link:'/patternInfo'
        },
        {
          src: img2,
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
