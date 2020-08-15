import React, { PureComponent } from 'react';
import router from 'umi/router';
import { Spin, Pagination } from "antd";
import axios from "../../util/axios";
import {giveLike,giveUnLike} from'../../util/utils';
import style from "../Runway/index.less";
import StyleList from "../../components/FashionStyle/styleList";

class FashionStyle extends PureComponent {
  state = {
    current: 1,
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
      router.push(`/style?currentPage=${query.currentPage ||'' }`);
      _this.queryList({
        current: query.currentPage || _this.state.current
      });
    } else {
      _this.queryList({
        current: _this.state.current
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
        url:`/style/getFashionStyleList?currentPage=${params.current ||'' }`,
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
  viewStatistics=async (brand,fashionSeason,fashionRegion)=>{
    await axios({
      method:"POST",
      url:`/style/viewStatistics`,
      data:{
        brand,fashionSeason,fashionRegion
      }
    });
  };
  handleStandardTableChange = (current, pageSize) => {
    if(current === 1){
      router.push(`/style`);
    } else {
      router.push(`/style?currentPage=${current ||this.state.current }`);
    }
    this.queryList({
      current, pageSize
    });
  };
  handleLikeChange=async(brandName,fashionSeason,fashionRegion,likeFlag)=>{
    if(likeFlag === 0){
      await giveLike(`${brandName}_${fashionSeason}_${fashionRegion}`,2);
    } else {
      await giveUnLike(`${brandName}_${fashionSeason}_${fashionRegion}`,2);
    }
    let query = this.props.location.query;
    this.queryList({
      current: query.currentPage || this.state.current
    });
  };
  handleSlideShow=async (main_id,fashionSeason,fashionRegion,brandName)=>{
    await this.viewStatistics(brandName,fashionSeason,fashionRegion);
    router.push(`/brand?id=${main_id}&fashion_season=${fashionSeason}&fashion_region=${fashionRegion}&brand=${brandName}`);
  };

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
            <div className={style.clearfix}>
              <StyleList
                data={this.state.productData}
                handleSlideShow={this.handleSlideShow}
                handleLikeChange={this.handleLikeChange}
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
export default FashionStyle;
