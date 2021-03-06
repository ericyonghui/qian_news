import React, { PureComponent } from 'react';
import {IMG_HOST_IP} from '../../../util/common';
import router from 'umi/router';
import {Spin,Row, Col } from "antd";
import {DownloadOutlined,EllipsisOutlined,HeartOutlined} from "@ant-design/icons";
import ErrorDiv from '../../../components/403';
import style from "./index.less";
import axios from "../../../util/axios";

class Detail extends PureComponent {
  state={
    spinLoading: false,
    productData: {
      img:'',
      main_id:'',
      material_title:'',
      material_format:'',
      material_size:'',
      material_copyright:'',
      tag:[]
    },
    errorFlag: false
  };

  componentDidMount(){
    let query = this.props.location.query;
    router.push(`/detail?id=${query.id ||'' }`);
    this.queryDetail({
      id: query.id || ''
    });
  }

  queryDetail=(params)=>{
    const _this = this;
    _this.setState({
      spinLoading: true,
      errorFlag: false,
      productData: {
        img:'',
        main_id:'',
        material_title:'',
        material_format:'',
        material_size:'',
        material_copyright:'',
        tag:[]
      },
    }, async()=>{
      let result = await axios({
        method:"GET",
        url:`/material/getDetail?id=${params.id ||'' }`,
      });
      const { code,data} = result;
      if (code === 200) {
        _this.setState({
          spinLoading: false,
          productData: data
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
    });
  };

  render() {
    const {productData:{img, material_title,material_format,material_size,material_copyright,tag}} = this.state;
    return (
      <Spin spinning={this.state.spinLoading}>
        <div className={style.patternContainer}>
        {
          this.state.errorFlag &&
          <ErrorDiv errorFlag="1"/>
        }
        {
          img!=='' &&
          <Row>
            <Col lg={{span:16,offset:4}} xl={{span:16,offset:4}} md={{span:20,offset:2}} sm={{span:22,offset:1}} xs={{span:22,offset:1}} className={`${style.clearfix} ${style.containerPadding}`}>
              <Col lg={12} xl={12} md={12} sm={24} xs={24} className={style.picture}>
                <img src={`${IMG_HOST_IP}/chosen/${img}`} alt=''/>
                <div className={style.mark}></div>
              </Col>
              <Col lg={12} xl={12} md={12} sm={24} xs={24} className={style.info} style={{float:'left'}}>
                <div className={`${style.infoIcon} ${style.clearfix}`}>
                  <DownloadOutlined style={{marginRight:"10px"}}/>
                  <EllipsisOutlined />
                  <HeartOutlined style={{float:'right'}}/>
                </div>
                <div className={style.infoList}>
                  <p>由 <strong>eric</strong> 上传</p>
                  <h3>{material_title}</h3>
                  <ul>
                    <li>格式：{material_format}</li>
                    <li>尺寸：{material_size}</li>
                    <li>版权：{material_copyright}</li>
                  </ul>
                </div>
                <div className={style.infoTip}>
                  <p>标签：</p>
                  <ul className={style.clearfix}>
                    {
                      tag.map((item, index) =>(
                        <li key={index}>{item.tag_name}</li>
                      ))
                    }
                  </ul>
                </div>
                <div className={style.anthorUp}>
                  <p>TA的上传</p>
                  <ul>
                    <li><img src={`${IMG_HOST_IP}/chosen/${img}`} alt=''/></li>
                  </ul>
                </div>
              </Col>
            </Col>
          </Row>
        }

        <div className={style.more}>
            {/*<p>更多推荐</p>*/}
            {/*<span></span>*/}
        </div>

        {/*<div className={style.container} style={{marginBottom:"15px"}}>*/}
        {/*  {this.state.list.map((item, index) => (*/}
        {/*    <div key={item.id} className={style.column}>*/}
        {/*      <img src={`http://106.37.96.145:2019/chosen/${img}`} alt=''/>*/}
        {/*    </div>*/}
        {/*  ))}*/}
        {/*</div>*/}
      </div>
      </Spin>
    );
  }
}
export default Detail;
