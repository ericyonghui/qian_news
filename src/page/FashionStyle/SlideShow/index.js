import React, { PureComponent } from 'react';
import {IMG_HOST_IP} from '../../../util/common';
import { Spin, Row, Col } from "antd";
import router from 'umi/router';
import {LeftOutlined, RightOutlined,DownOutlined, UpOutlined} from "@ant-design/icons";
import style from "../../../components/Runway/SlideShow/swiperPicture.less";
import axios from "../../../util/axios";

class Detail extends PureComponent {
  state={
    selectPic:'',
    selectKey: 1,
    spinLoading: false,
    productData: {
      brand_name:'',
      fashion_season:'',
      fashion_region:'',
      imgs:[]
    },
    ulHeight:`${document.body.clientHeight - 140}px`,
    setHeight:`${document.body.clientHeight}px`
  };
  componentDidMount(){
    let query = this.props.location.query;
    router.push(`/slideShow/brand_slideShow?id=${query.id ||'' }`);
    this.queryDetail({
      id: query.id || ''
    });
    window.addEventListener('resize',this.handleWidth);
  }
  handleWidth=()=>{
    let clientHeight = document.body.clientHeight;
    let newUlHeight = clientHeight - 140;
    this.setState({
      setHeight:`${clientHeight}px`,
      ulHeight:`${newUlHeight}px`
    });
  };
  componentWillUnmount() {
    window.addEventListener('resize',this.handleWidth);
  }
  queryDetail=(params)=>{
    const _this = this;
    _this.setState({
      spinLoading: true,
      productData: {
        brand_name:'',
        fashion_season:'',
        fashion_region:'',
        imgs:[]
      },
    }, async()=>{
      let result = await axios({
        method:"GET",
        url:`/style/getDetail?id=${params.id ||'' }`,
      });
      const { code,data:{brand_name,fashion_season,fashion_region,imgData}} = result;
      if (code === 200) {
        let dataList = [];
        for (const [index, val] of imgData.entries()) {
          const obj = { key: (index + 1) };
          Object.assign(val, obj);
          dataList.push(val);
        }
        let obj=dataList.filter(item=>{return item.key === 1})[0];
        _this.setState({
          spinLoading: false,
          productData:{
            brand_name,
            fashion_season,
            fashion_region,
            imgs:dataList
          },
          selectPic: obj.img
        });
      } else{
        _this.setState({
          spinLoading: false
        });
      }
    });
  };
  handleRoll=(direction)=>{
    const {productData:{imgs},selectKey} = this.state;
    let newSelectKey = '', newTop=0;
    if(direction ==='up'){
      if(selectKey ===1){
        newSelectKey = selectKey;
      } else{
        newSelectKey = selectKey-1;
      }
    } else if(direction ==='down'){
      if(selectKey ===imgs.length){
        newSelectKey = selectKey;
      } else{
        newSelectKey = selectKey+1;
      }
    } else if(direction ==='left'){
      if(selectKey ===1){
        newSelectKey = imgs.length;
      } else{
        newSelectKey = selectKey-1;
      }
    } else if(direction ==='right'){
      if(selectKey === imgs.length){
        newSelectKey = 1;
      } else{
        newSelectKey = selectKey + 1;
      }
    }
    let diffVal=(this.ulDom.clientHeight) - (document.body.clientHeight - 140);
    let top = this.ulDom.style.top;
    let liHeight =this.ulDom.childNodes[0].clientHeight;
    if(direction ==='up' || direction ==='left'){
      if(direction ==='left'){
        if(selectKey ===1){
          this.ulDom.style.top= `-${diffVal}px`;
        }
      }
      if(newSelectKey <= imgs.length-2){
        let newTop=Math.abs(parseInt(top)) - liHeight;
        if(newTop<0){
          newTop = 0;
        }
        this.ulDom.style.top= newTop ===0 ? `0px` : `-${newTop}px`;
      }
    } else if(direction ==='down' || direction ==='right'){
      if(direction ==='right'){
        if(selectKey === imgs.length){
          this.ulDom.style.top=`0px`;
        }
      }

      if(newSelectKey>2){
        let newTop='';
        if(parseInt(newSelectKey) === 3){
          newTop=liHeight-40;
        } else {
          newTop=((selectKey-1) * (liHeight+2));
        }
        if(newTop>diffVal){
          newTop = diffVal;
        }
        this.ulDom.style.top=`-${newTop}px`;
      }
    }
    let obj=imgs.filter(item=>{return item.key === newSelectKey})[0];
    this.setState({
      selectKey: newSelectKey,
      selectPic: obj.img
    })
  };

  render() {
    let {productData:{ brand_name,fashion_season,fashion_region,imgs},setHeight,selectKey,ulHeight} = this.state;
    return (
      <Spin spinning={this.state.spinLoading}>
        {
          imgs.length > 0 &&
          <Row className={style.container}>
            <Col xl={4} lg={4} md={4} sm={24} xs={24} className={style.info}>
              <h4 className={style.infoTitle}>{fashion_region}</h4>
              <p className={style.infoTab}>{fashion_season}</p>
              <h3 className={style.infoPin}>{brand_name}</h3>
            </Col>
            <Col xl={20} lg={20} md={20} sm={24} xs={24} className={style.picContainer}>
              <div className={style.max} style={{height: setHeight}}>
                <LeftOutlined className={style.maxLeft} onClick={() => {
                  this.handleRoll('left')
                }}/>
                <img src={`${IMG_HOST_IP}${this.state.selectPic}`} alt=""/>
                <RightOutlined className={style.maxright} onClick={() => {
                  this.handleRoll('right')
                }}/>
              </div>
              <div className={style.min}>
                <div className={style.minIcon} onClick={() => {
                  this.handleRoll('up')
                }}>
                  <UpOutlined style={{fontSize: '20px'}}/>
                </div>
                <div style={{height:ulHeight}} className={style.minPositon}>
                  <ul className={style.minList} style={{top: 0}} ref={(c) => {
                    this.ulDom = c;
                  }}>
                    {
                      imgs.map((item) => (
                        <li key={item.key}>
                          <img src={`${IMG_HOST_IP}${item.img}`} alt=""/>
                          {
                            selectKey === item.key &&
                              <div className={style.mark}>
                                <p>{item.key > 9 ? item.key : `0${item.key}`}</p>
                              </div>
                          }
                        </li>
                      ))
                    }
                  </ul>
                </div>
                <div className={style.minIcon} onClick={() => {
                  this.handleRoll('down')
                }}>
                  <DownOutlined/>
                </div>
              </div>
            </Col>
          </Row>
        }
      </Spin>
    );
  }
}
export default Detail;
