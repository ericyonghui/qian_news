import React, { PureComponent } from 'react';
import { Spin } from "antd";
import ListPicture from "../../../components/Runway/SlideShow/listPicture"
import SwiperPicture from "../../../components/Runway/SlideShow/swiperPicture"
import style from "./index.less"
import axios from "../../../util/axios";

class SlideShow extends PureComponent{
  state={
    switchFlag:false,
    spinLoading: false,
    imgTypeList:[],
    imgObj:{
      city_cn:'',
      fashion_season:'',
      release_date:'',
      brand_name:'',
      imgData:[]
    },
    selectTypeKey:1,
    selectTypeVal:"T台",
  };

 componentDidMount(){
    const _this = this;
    let query = _this.props.location.query;
    if(typeof query.id!=='undefined'){
      this.queryImgTypeList(query.id);
    }
  }

  queryImgTypeList = (id) =>{
    const _this = this;
    _this.setState({
      imgTypeList:[]
    }, async()=>{
      let result = await axios({
        method:"GET",
        url:`/fashion/getImgTypeList?id=${id}`,
      });
      const { code,data } = result;
      if (code === 200) {
        this.queryImgList(id,data[0].typeKey);
        _this.setState({
          imgTypeList: data
        });
      }
    });
  };
  queryImgList = (id,typeKey) =>{
    const _this = this;
    _this.setState({
      spinLoading: true,
      imgObj:{
        city_cn:'',
        fashion_season:'',
        release_date:'',
        brand_name:'',
        imgData:[]
      }
    }, async()=>{
      let result = await axios({
        method:"GET",
        url:`/fashion/getImgList?id=${id}&imgType=${typeKey}`,
      });
      const { code,data:{city_cn,fashion_season,release_date,brand_name,imgData}} = result;
      if(code === 200){
        let dataList = [];
        for (const [index, val] of imgData.entries()) {
          const obj = { key: (index + 1) };
          Object.assign(val, obj);
          dataList.push(val);
        }
        _this.setState({
          spinLoading: false,
          imgObj:{
            city_cn,
            fashion_season,
            release_date,
            brand_name,
            imgData:dataList
          }
        });
      } else {
        _this.setState({
          spinLoading: false,
        });
      }
    });
  };

  handleSelectType=(val)=>{
    console.info(val)
    let newSelectTypeVal='';
    if(parseInt(val) ===1){
      newSelectTypeVal="T台";
    } else if(parseInt(val) ===2){
      newSelectTypeVal="细节";
    } else if(parseInt(val) ===3){
      newSelectTypeVal="前排";
    } else if(parseInt(val) ===4){
      newSelectTypeVal="妆容";
    } else if(parseInt(val) ===5){
      newSelectTypeVal="场景";
    }
    this.setState({
      selectTypeKey: parseInt(val),
      selectTypeVal:newSelectTypeVal
    },()=>{
      let query = this.props.location.query;
      if(typeof query.id!=='undefined'){
        this.queryImgList(query.id,val);
      }
    })
  };
  render(){
    return (
      <Spin spinning={this.state.spinLoading}>
        <div className={style.detail}>
          {
            this.state.switchFlag
              ?
              (
                <ListPicture/>)
              :
              (
                this.state.imgObj.imgData.length>0 &&
                <SwiperPicture
                  imgTypeList={this.state.imgTypeList}
                  imgObj={this.state.imgObj}
                  selectTypeVal={this.state.selectTypeVal}
                  handleSelectType={this.handleSelectType}
              />)
          }
        </div>
      </Spin>
    )
  }
}
export default SlideShow;
