import React, { PureComponent } from 'react';
import {IMG_HOST_IP} from '../../../util/common';
import router from 'umi/router';
import { Spin, Row, Col, Pagination } from "antd";
import style from "./index.less";
import axios from "../../../util/axios";
import BrandList from '../../../components/BrandList/brandList';

class Brand extends PureComponent {
  state={
    current: 1,
    spinLoading: false,
    productData: {
      fashion_season:'',
      fashion_region:'',
      brand:'',
      img:'',
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
      router.push(`/brand?id=${query.id ||''}&fashion_season=${query.fashion_season ||''}&fashion_region=${query.fashion_region ||''}&brand=${query.brand ||''}&currentPage=${query.currentPage ||'' }`);
      _this.queryList({
        current: query.currentPage || _this.state.current,
        id:query.id ||'',
        fashion_season: query.fashion_season ||'',
        fashion_region: query.fashion_region ||'',
        brand: query.brand ||''
      });
    } else {
      _this.queryList({
        current: _this.state.current,
        id:query.id ||'',
        fashion_season: query.fashion_season ||'',
        fashion_region: query.fashion_region ||'',
        brand: query.brand ||''
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
        url:`/style/getFashionBrandList?currentPage=${params.current ||'' }&id=${params.id}&fashion_season=${params.fashion_season}&fashion_region=${params.fashion_region}&brand=${params.brand}`,
      });
      const { code,data:{fashion_season,fashion_region,brand,img,data}} = result;
      if (code === 200) {
        const {count,pageSize,current,rows} = data;
        let dataList = [];
        for (const [index, val] of rows.entries()) {
          const obj = { key: (index + 1) };
          Object.assign(val, obj);
          dataList.push(val);
        }
        let objData = {
          fashion_season,
          fashion_region,
          brand,
          img,
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
    let query = this.props.location.query;
    if(current === 1){
      router.push(`/brand?id=${query.id ||''}&fashion_season=${query.fashion_season ||''}&fashion_region=${query.fashion_region ||''}&brand=${query.brand ||''}`);
    } else {
      router.push(`/brand?id=${query.id ||''}&fashion_season=${query.fashion_season ||''}&fashion_region=${query.fashion_region ||''}&brand=${query.brand ||''}&currentPage=${current ||this.state.current }`);
    }
    this.queryList({
      current,
      pageSize,
      id:query.id ||'',
      fashion_season: query.fashion_season ||'',
      fashion_region: query.fashion_region ||'',
      brand: query.brand ||''
    });
  };
  handleSlideShow=(main_id)=>{
    router.push(`/slideShow/brand_slideShow?id=${main_id}`);
  };
  render() {
    return (
      <Spin spinning={this.state.spinLoading}>
        <div className={style.MultiggarphContainer}>
          {/* title */}
          {
            this.state.productData.fashion_season &&
            <div className={style.container}>
              <Row className={`${style.nav} ${style.clearfix}`}>
                <Col xl={3} lg={4} md={4} xs={24} sm={24} className={style.picture}>
                  <p><img src={`${IMG_HOST_IP}${this.state.productData.img}`} alt="" /></p>
                </Col>
                <Col xl={21} lg={20} md={20} xs={24} sm={24} className={style.info}>
                  <h2>{`${this.state.productData.brand} ${this.state.productData.fashion_season}`}系列</h2>
                  <p>{`${this.state.productData.brand} | ${this.state.productData.fashion_season} | ${this.state.productData.fashion_region}`}</p>
                </Col>
              </Row>
            </div>
          }

          {/* list */}
          {
            this.state.productData.list.length<=0 &&
            <div style={{width:'100%',height:"500px"}}/>
          }
         {
              this.state.productData.list.length>0 &&
              <div className={style.list}>
                  <BrandList
                    data={this.state.productData}
                    handleSlideShow={this.handleSlideShow}
                  />
                  <div className={style.pagination}>
                    <Pagination
                      onChange={this.handleStandardTableChange}
                      showQuickJumper={true}
                      showSizeChanger={false}
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
export default Brand;
