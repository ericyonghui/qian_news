import React, { PureComponent } from 'react';
import router from 'umi/router';
import axios from "../../util/axios";
import {giveLike,giveUnLike} from'../../util/utils';
import { Spin, Pagination } from "antd";
import style from "../Runway/index.less";
import StreetSnapList from "../../components/StreetSnap/streetSnapList";
import ErrorDiv from '../../components/403';

class StreetSnap extends PureComponent {
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
    },
    errorFlag: false
  };
  componentDidMount(){
    const _this = this;
    let query = _this.props.location.query;
    if(typeof query.currentPage!=='undefined'){
      router.push(`/streetSnap?currentPage=${query.currentPage ||'' }`);
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
      errorFlag: false,
      productData: {
        list: [],
        pagination: {},
      },
    }, async()=>{
      let result = await axios({
        method:"GET",
        url:`/streetSnap/getStreetSnapList?currentPage=${params.current ||'' }`,
      });
      if(typeof result.code!=='undefined'){
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
        } else if(code === 403){
          _this.setState({
            spinLoading: false,
            errorFlag: true,
          });
        } else{
          _this.setState({
            spinLoading: false
          });
        }
      }
    });
  };
  viewStatistics=async (id)=>{
    await axios({
      method:"POST",
      url:`/streetSnap/viewStatistics`,
      data:{
        id
      }
    });
  };
  handleStandardTableChange = (current, pageSize) => {
    if(current === 1){
      router.push(`/streetSnap`);
    } else {
      router.push(`/streetSnap?currentPage=${current ||this.state.current }`);
    }
    this.queryList({
      current, pageSize
    });
  };
  handleLikeChange=async (id,likeFlag)=>{
    if(likeFlag === 0){
      await giveLike(id,3);
    } else {
      await giveUnLike(id,3);
    }
    let query = this.props.location.query;
    this.queryList({
      current: query.currentPage || this.state.current
    });
  };
  handleSlideShow=async (id)=>{
    await this.viewStatistics(id);
    router.push(`/slideShow/streetSnap_slideShow?id=${id}`);
  };

  render() {
    return (
      <Spin spinning={this.state.spinLoading}>
        <div className={style.TstageContainer}>
          {
            this.state.errorFlag &&
              <ErrorDiv errorFlag="1"/>
          }
          {
            this.state.productData.list.length<=0 &&
            <div style={{width:'100%',height:"500px"}}/>
          }
          {
            this.state.productData.list.length>0 &&
            <div className={style.clearfix}>
              <StreetSnapList
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
export default StreetSnap;
