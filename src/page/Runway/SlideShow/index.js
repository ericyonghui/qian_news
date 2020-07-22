import React, { PureComponent } from 'react';
import { Spin } from "antd";
import ListPicture from "../../../components/Runway/SlideShow/listPicture"
import SwiperPicture from "../../../components/Runway/SlideShow/swiperPicture"
import style from "./index.less"
import axios from "../../../util/axios";

class SlideShow extends PureComponent{
  state={
    flag:false,
    spinLoading: false,
    imgTypeList:[],
    imgObj:{
      city_cn:'',
      fashion_season:'',
      release_date:'',
      brand_name:'',
      imgData:[]
    }
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
      spinLoading: true,
      imgTypeList:[],
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
        url:`/fashion/getImgTypeList?id=${id}`,
      });
      const { code } = result;
      if (code === 200) {
        let result1 = await axios({
          method:"GET",
          url:`/fashion/getImgList?id=${id}&imgType=${result.data[0].typeKey}`,
        });
        const { code } = result1;
        if(code === 200){
          let dataList = [];
          for (const [index, val] of result1.data.imgData.entries()) {
            const obj = { key: (index + 1) };
            Object.assign(val, obj);
            dataList.push(val);
          }
          _this.setState({
            spinLoading: false,
            imgTypeList:result.data,
            imgObj:{
              city_cn:result1.data.city_cn,
              fashion_season:result1.data.fashion_season,
              release_date:result1.data.release_date,
              brand_name:result1.data.brand_name,
              imgData:dataList
            }
          });
        } else {
          _this.setState({
            spinLoading: false,
          });
        }
      }
    });
  };

  render(){
    return (
      <Spin spinning={this.state.spinLoading}>
        <div className={style.detail}>
          {
            this.state.flag
              ?
              (<ListPicture/>)
              :
              (
                this.state.imgObj.imgData.length>0 &&
                <SwiperPicture
                imgTypeList={this.state.imgTypeList}
                imgObj={this.state.imgObj}
              />)
          }
        </div>
      </Spin>
    )
  }
}
export default SlideShow;
