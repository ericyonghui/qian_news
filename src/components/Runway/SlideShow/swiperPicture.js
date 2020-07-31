import React, { PureComponent } from 'react';
import { Row, Col,Select  } from "antd";
import { IMG_HOST } from "../../../util/common";
import { AppstoreOutlined ,LeftOutlined ,RightOutlined,UpOutlined,DownOutlined} from "@ant-design/icons";
import style from "./swiperPicture.less";

const { Option } = Select;

class SwiperPicture extends PureComponent {
  state={
    ulHeight:`${document.body.clientHeight - 140}px`,
    selectPic:'',
    selectKey: 1,
    setHeight:`${document.body.clientHeight}px`
  };
  componentDidMount(){
    const {imgObj:{imgData}} = this.props;
    let obj=imgData.filter(item=>{return item.key === 1})[0];
    this.setState({
      selectPic: obj.img
    });
    window.addEventListener('resize',this.handleWidth)
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

  handleRoll=(direction)=>{
    const {imgObj:{imgData}} = this.props;
    const {selectKey} = this.state;
    let newSelectKey = '';
    if(direction ==='up'){
      if(selectKey ===1){
        newSelectKey = selectKey;
      } else{
        newSelectKey = selectKey-1;
      }
    } else if(direction ==='down'){
      if(selectKey ===imgData.length){
        newSelectKey = selectKey;
      } else{
        newSelectKey = selectKey+1;
      }
    } else if(direction ==='left'){
      if(selectKey ===1){
        newSelectKey = imgData.length;
      } else{
        newSelectKey = selectKey-1;
      }
    } else if(direction ==='right'){
      if(selectKey === imgData.length){
        newSelectKey = 1;
      } else{
        newSelectKey = selectKey + 1;
      }
    }
    let obj=imgData.filter(item=>{return item.key === newSelectKey})[0];
    this.setState({
      selectKey: newSelectKey,
      selectPic: obj.img
    },()=>{
      console.info(this.state.selectKey)
    })
  };


  render() {
    const {imgTypeList,imgObj:{city_cn,fashion_season,release_date,brand_name,imgData},selectTypeVal,handleSelectType,handleSwitch} = this.props;
    const imgTypeListOptions = imgTypeList.map((province) => {
      return <Option key={province.typeKey}>{province.typeVal}</Option>;
    });
    return (
      <div>
        <Row className={style.container}>
          <Col xl={4} lg={4} md={4} sm={24} xs={24} className={style.info}>
          <h4 className={style.infoTitle}>{brand_name}</h4>
            <p className={style.infoAdress}>{`${fashion_season}/${release_date}  ${city_cn}`}  </p>
            {/*<p className={style.infoAllIcon}>*/}
            {/*  */}
            {/*</p>*/}
            <Select
              bordered={false}
              value={selectTypeVal}
              onChange={handleSelectType}
              style={{width: '120px'}}
            >
              {imgTypeListOptions}
            </Select>
            <div className={style.infoTab} onClick={()=>{handleSwitch(true)}}>
              <AppstoreOutlined />&nbsp;
              <span>浏览完整系列</span>
            </div>
          </Col>
          <Col xl={20} lg={20} md={20} sm={24} xs={24} className={style.picContainer} >
            <div className={style.max}>
                <LeftOutlined className={style.maxLeft}  onClick={()=>{this.handleRoll('left')}}/>
                <img src={`${IMG_HOST}/webp${this.state.selectPic}`} alt="" />
                <RightOutlined className={style.maxright}  onClick={()=>{this.handleRoll('right')}}/>
            </div>
            <div className={style.min} style={{height:this.state.setHeight}}>
              {
                this.state.selectKey > 1 &&
                <div className={style.minIcon}  onClick={()=>{this.handleRoll('up')}}>
                  <UpOutlined style={{fontSize:'20px'}}/>
                </div>
              }
              <div style={{height:this.state.ulHeight}} className={style.minPositon}>
                <ul className={style.minList} >
                  {
                    imgData.map(item=>(
                      <li key={item.img_id}>
                        <img src={`${IMG_HOST}/webp${item.img}`} alt="" />
                        <div className={style.mark}>
                          <p>{item.key}</p>
                        </div>
                      </li>
                    ))
                  }
                </ul>
              </div>
              {
                this.state.selectKey < imgData.length &&
                <div className={style.minIcon} onClick={()=>{this.handleRoll('down')}} >
                  <DownOutlined />
                </div>
              }
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
export default SwiperPicture;
