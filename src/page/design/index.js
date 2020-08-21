import React, { PureComponent } from 'react';
import router from 'umi/router';
import axios from "../../util/axios";
import { Spin, Pagination } from "antd";
import style from "../../page/Material/index.less";
import MaterialList from "../../components/Material/materialList";
import ErrorDiv from "../../components/403";


class Design extends PureComponent {
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
      router.push(`/design?currentPage=${query.currentPage ||'' }`);
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
        url:`/material/getMaterialList?currentPage=${params.current ||'' }`,
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
      } else if(code === 403){
        _this.setState({
          spinLoading: false,
          errorFlag: true,
        });
      }else{
        _this.setState({
          spinLoading: false
        });
      }
    });
  };
  handleStandardTableChange = (current, pageSize) => {
    if(current === 1){
      router.push(`/design`);
    } else {
      router.push(`/design?currentPage=${current ||this.state.current }`);
    }
    this.queryList({
      current, pageSize
    });
  };

  handleSlideShow=(id)=>{
    router.push(`/detail?id=${id}`);
  };

  render() {
    return (
      <Spin spinning={this.state.spinLoading}>
        <div className={style.patternContainer}>
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
            <div>
              <MaterialList
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
export default Design;
