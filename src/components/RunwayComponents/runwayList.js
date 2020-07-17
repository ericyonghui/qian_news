import React, { PureComponent } from 'react';
import LazyLoad from 'react-lazyload';
import {IMG_HOST} from '../../util/common';
import {Row, Col } from "antd";
import { HeartFilled, EyeFilled } from "@ant-design/icons";
import style from "../../page/Runway/index.less";



class RunwayList extends PureComponent {
  componentDidMount(){

  }

  renderList(){
    let vDOM=[];
    let {data:{list}} = this.props;
    if(list.length>0){
      list.forEach((item)=>{
        let {key,main_id,city_cn,fashion_season,release_date,brand_name,gender,img} = item;
        vDOM.push(
          <Col style={{marginLeft: '10px',marginTop: '10px'}} className={style.list} key={key}>
              <div className={style.stagemain} onClick={()=>{}}>
                {/*<LazyLoad  height={0}>*/}
                  <div className={`${style.picture}`}>
                      <img src={`${IMG_HOST}/webp${img}`} alt=""/>
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
                    <h3 className={style.title}>{`${release_date}${fashion_season}${brand_name}${gender ==='women'? '女装':'男装'}发布会`}</h3>
                    <p className={style.infomation}>{`${brand_name}|${release_date}${fashion_season}|${city_cn}`}</p>
                    <p className={style.anthor}>MR Right</p>
                    <p className={style.anthor}>2020.7.17</p>
                  </div>
                {/*</LazyLoad>*/}
              </div>
          </Col>
        )
      })
    }
    return vDOM;
  }

  render() {
    return (
        <Row type="flex">
            {this.renderList()}
        </Row>
    );
  }
}
export default RunwayList;
