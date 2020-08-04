import React, { PureComponent } from "react";
import { Carousel } from "antd";
import style from "./home.less";
import img1 from "./01.png";
import img2 from "./02.png";
import img3 from "./03.png";
import img4 from "./left.png"
import img5 from "./right.png"

class Home extends PureComponent {
    state={
        list:[
            {
                id:'01',
                src:img1,
                title:'prada   2020秋冬',
                time:'2020.6.15'
            },
            {
                id:'02',
                src:img2,
                title:'prada   2020秋冬',
                time:'2020.6.15'
            },
            {
                id:'03',
                src:img2,
                title:'prada   2020秋冬',
                time:'2020.6.15'
            },
            {
                id:'04',
                src:img3,
                title:'prada   2020秋冬',
                time:'2020.6.15'
            },
            {
                id:'05',
                src:img3,
                title:'prada   2020秋冬',
                time:'2020.6.15'
            },
            {
                id:'06',
                src:img1,
                title:'prada   2020秋冬',
                time:'2020.6.15'
            }
        ],
        pictureList:[
            {
                id:'01',
                src:img5
            },
            {
                id:'02',
                src:img5
            },
            {
                id:'03',
                src:img5
            },
            {
                id:'04',
                src:img5
            },
            {
                id:'05',
                src:img5
            },
            {
                id:'06',
                src:img5
            }
        ]
    }
  render() {
    return (
      <div className={style.homeContainer}>
        {/* 轮播图 */}
        <div className={style.carsuselContainer}>
          <Carousel autoplay style={{ height: "480px" }}>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
          </Carousel>
        </div>
        {/* 潮流发布 */}
        <div className={style.pubileTitle}>
            <h3>潮流发布</h3>
            <p>秀场直击，最IN的前沿时尚资讯</p>
          </div>
        <div className={style.trend}>
         
          <div className={style.trendList}>
            <div className={style.trendListContainer}>
              <div className={style.trendListItem}>
                <div className={style.trendListItemBack}>
                  <img src={img1} alt="" />
                  <h4>2020春夏Chanel高级成衣</h4>
                  <p>MR Right</p>
                  <p>2020.6.15</p>
                </div>
              </div>
              <div className={style.trendListItem}>
                <div className={style.trendListItemBack}>
                  <img src={img2} alt="" />
                  <h4> 2020春夏 Alexander McQueen高级成衣</h4>
                  <p> Honor</p>
                  <p>2020.4.7</p>
                </div>
              </div>
              <div className={style.trendListItem}>
                <div className={style.trendListItemBack}>
                  <img src={img3} alt="" />
                  <h4>2020秋冬 Louis Vuitton高级成衣</h4>
                  <p>Clive</p>
                  <p>2020.5.16</p>
                </div>
              </div>
            </div> 
          </div>
          
        </div>
        <div className={style.buttonPubilc}>
                <p>查看全部潮流发布</p>
            </div>
         {/* 品牌聚焦 */}
         <div className={style.brand}>
            <div className={style.pubileTitle}>
                <h3>品牌聚焦</h3>
                <p>世界品牌，最新潮流，一网打尽</p>
            </div>
            <div className={style.brandList}>
               
                    {
                        this.state.list.map(item=>(
                            <div key="item.id" className={style.item}>
                                <div className={style.brandItem}>
                                    <img src={item.src} alt=""/>
                                    <p>{item.title}</p>
                                    <span>{item.time}</span>
                                </div>
                                
                            </div>
                        ))
                    }
                
            </div>
            <div className={style.buttonPubilc}>
                <p>查看全部品牌咨询</p>
            </div>
         </div>
        {/* 图案 &amp; 素材 */}
        <div className={style.picture}>
            <h3>图案 &amp; 素材</h3>
            <div className={`${style.pictureList} ${style.clearfix}`}>
                <div className={style.pictureLeft}>
                    <img src={img4} alt=""/>
                    <p>查看更多素材</p>
                </div>
                <div className={`${style.pictureRight} ${style.clearfix}`}>
                    <ul>
                        {
                            this.state.pictureList.map(item=>(
                                <li key={item.id}>
                                    <img src={item.src} alt=""/>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div className={style.buttonPubilc}>
                <p>查看更多图案</p>
            </div>
        </div>
      </div>

    );
  }
}
export default Home;
