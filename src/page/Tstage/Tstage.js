import React, { PureComponent } from 'react';
import router from 'umi/router';
import {IMG_HOST} from '../../util/common';
import { Spin, Row, Col, Pagination } from "antd";
import { HeartFilled, EyeFilled } from "@ant-design/icons";
import axios from '../../util/axios';
import style from "./Tstage.less";

class Tstage extends PureComponent {
  state = {
    current: 1,
    pageSize: 24,
    spinLoading: false,
    productData: {
      list: [],
      pagination: {
        total: 0,
        pageSize: 0,
        current: 1,
      }
    }
  };
  componentDidMount(){
    const _this = this;
    let query = _this.props.location.query;
    if(typeof query.currentPage!=='undefined'){
      router.push(`/Tstage?currentPage=${query.currentPage ||'' }&pageSize=${query.pageSize ||'' }`);
      _this.queryList({
        current: query.currentPage || _this.state.current,
        pageSize: query.pageSize || _this.state.pageSize
      });
    } else {
      _this.queryList({
        current: _this.state.current,
        pageSize: _this.state.pageSize
      });
    }
  }
  queryList = (params) =>{
    const _this = this;
    _this.setState({
      spinLoading: true,
      productData: {
        list: [],
        pagination: {},
      },
    }, async()=>{
      let result = await axios({
        method:"GET",
        url:`/fashion/getFashionShowList?currentPage=${params.current ||'' }&pageSize=${params.pageSize ||'' }`,
      });
      const { code,data} = result;
      if (code === 200) {
        const {count,pageSize,current,rows} = data;
        let dataList = [];
        for (const [index, val] of rows.entries()) {
          const obj = { key: (index + 1) };
          Object.assign(val, obj);
          dataList.push(val);
        }
        let objData = {
          pagination: {
            total: count,
            pageSize,
            current
          },
          list: dataList,
        };
        _this.setState({
          spinLoading: false,
          productData: objData
        });
      } else{
        _this.setState({
          spinLoading: false
        });
      }
    });
  };
  handleStandardTableChange = (current, pageSize) => {
    router.push(`/Tstage?currentPage=${current ||this.state.current }&pageSize=${pageSize ||this.state.pageSize }`);
    this.queryList({
      current, pageSize
    });
  };
  renderList(){
    let vDOM=[];
    let {productData:{list}} = this.state;
    if(list.length>0){
      list.forEach((item)=>{
        let {key,main_id,city_cn,fashion_season,release_date,brand_name,gender,img} = item;
        vDOM.push(
          <Col lg={8} xl={6} md={12} sm={24} xs={24} className={style.list} key={key}>
            <div className={style.stagemain} onClick={()=>{}}>
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
            </div>
          </Col>
        )
      })
    }
    return vDOM;
  }

  render() {
    return (
      <Spin spinning={this.state.spinLoading}>
        <div className={style.TstageContainer}>
          {
            this.state.productData.list.length<=0 &&
            <div style={{width:'100%',height:"500px"}}/>
          }
          {
            this.state.productData.list.length>0 &&
            <div>
              <Row>
                {this.renderList()}
              </Row>
              <div className={style.pagination}>
                <Pagination
                  onChange={this.handleStandardTableChange}
                  showQuickJumper={true}
                  hideOnSinglePage={true}
                  total={this.state.productData.pagination.total}
                  pageSize={this.state.productData.pagination.pageSize}
                  current={this.state.productData.pagination.current}
                />
              </div>
            </div>
          }
        </div>
      </Spin>
    );
  }
}
export default Tstage;
