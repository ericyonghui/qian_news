import React, { PureComponent } from 'react';
import router from 'umi/router';
import RunwayList from '../../components/RunwayComponents/runwayList';
import { Spin, Pagination } from "antd";
import axios from '../../util/axios';
import ReactDOM from 'react-dom';
import style from "./index.less";


class Runway extends PureComponent {
  state = {
    current: 1,
    pageSize: 25,
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
      router.push(`/runway?currentPage=${query.currentPage ||'' }&pageSize=${query.pageSize ||'' }`);
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
    router.push(`/runway?currentPage=${current ||this.state.current }&pageSize=${pageSize ||this.state.pageSize }`);
    window.scrollTo(0, 0);
    this.queryList({
      current, pageSize
    });
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
            <div ref={(ref)=>this.listBegin=ref}>
              <RunwayList
                data={this.state.productData}
              />
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
export default Runway;
