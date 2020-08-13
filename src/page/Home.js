import React, { PureComponent } from "react";
import { Carousel } from "antd";
import router from 'umi/router';
import Link from 'umi/link';
import {lazyLoad} from '../util/utils';
import { IMG_HOST,IMG_HOST_IP } from "../util/common";
import axios from "../util/axios";
import style from "./home.less";
import LB1 from "../assets/banner/LB1.jpg";
import LB2 from "../assets/banner/LB2.jpg";
import LB3 from "../assets/banner/LB3.jpg";

class Home extends PureComponent {
    state={
       fashionList:[],
       styleList:[],
       materialList:[],
       manuscriptsList:[],
    };

  componentDidMount(){
    this.queryFashionIndividuation();
    this.queryStyleIndividuation();
    this.queryMaterialIndividuation();
    this.queryManuscriptsIndividuation();
    let imgArr = document.querySelectorAll('img');
    lazyLoad(imgArr);
    window.addEventListener('scroll',this.handleImgScroll);
  }
  handleImgScroll=async ()=>{
    let imgArr = document.querySelectorAll('img');
    await lazyLoad(imgArr);
  };

  componentWillUnmount() {
    window.removeEventListener('scroll',this.handleImgScroll);
  }

  queryFashionIndividuation=()=>{
    const _this = this;
    _this.setState({
      fashionList: []
    },async ()=>{
      let result = await axios({
        method:"GET",
        url:`/fashion/getFashionIndividuation`,
      });
      const { code,data} = result;
      if (code === 200) {
        _this.setState({
          fashionList: data
        });
      }
    })

  };
  queryStyleIndividuation=()=>{
    const _this = this;
    _this.setState({
      styleList: []
    },async ()=>{
      let result = await axios({
        method:"GET",
        url:`/style/getStyleIndividuation`,
      });
      const { code,data} = result;
      if (code === 200) {
        _this.setState({
          styleList: data
        });
      }
    })

  };
  queryMaterialIndividuation=()=>{
    const _this = this;
    _this.setState({
      materialList: []
    },async ()=>{
      let result = await axios({
        method:"GET",
        url:`/material/getMaterialIndividuation`,
      });
      const { code,data} = result;
      if (code === 200) {
        _this.setState({
          materialList: data
        });
      }
    })

  };
  queryManuscriptsIndividuation=()=>{
    const _this = this;
    _this.setState({
      manuscriptsList: []
    },async ()=>{
      let result = await axios({
        method:"GET",
        url:`/material/getManuscriptsIndividuation`,
      });
      const { code,data} = result;
      if (code === 200) {
        _this.setState({
          manuscriptsList: data
        });
      }
    })
  };


  handleFashionSlideShow=(id)=>{
    router.push(`/slideShow/runway_slideShow?id=${id}`);
  };
  renderFashion(){
    let vDOM=[],{fashionList} = this.state;
    fashionList.forEach(item=>{
      let {main_id,fashion_season,release_date,brand_name,gender,img} = item;
      vDOM.push(<div className={style.trendListItem} key={main_id} onClick={() => {this.handleFashionSlideShow(main_id)}}>
        <div className={style.trendListItemBack}>
          <img data-src={`${IMG_HOST}/webp${img}`} alt="" />
          <h4 title={`${release_date}${fashion_season}${brand_name}${gender === "women" ? "女装" : "男装"}发布会`}>{`${release_date}${fashion_season}${brand_name}${
            gender === "women" ? "女装" : "男装"
            }发布会`}</h4>
          <p>MR Right</p>
          <p>2020.6.15</p>
        </div>
      </div>)
    });
    return vDOM;
  }

  handleStyleSlideShow=(main_id,fashionSeason,fashionRegion,brandName)=>{
    router.push(`/brand?id=${main_id}&fashion_season=${fashionSeason}&fashion_region=${fashionRegion}&brand=${brandName}`);
  };
  renderStyle(){
    let vDOM=[],{styleList} = this.state;
    styleList.forEach(item=>{
      let {main_id,brand_name,fashion_season,fashion_region,gender,img}= item;
      vDOM.push(<div key={main_id} className={style.item} onClick={() => {this.handleStyleSlideShow(main_id,fashion_season,fashion_region,brand_name)}}>
        <div className={style.brandItem}>
          <img  data-src={`${IMG_HOST_IP}${img}`} alt=""/>
          <p title={`${brand_name}${fashion_season}${gender === "women" ? "女装" : (gender === "men" ? "男装": "童装")}系列`}>{`${brand_name}${fashion_season}${gender === "women" ? "女装" : (gender === "men" ? "男装": "童装")}系列`}</p>
          <span>{item.time}</span>
        </div>
      </div>);
    });
    return vDOM;
  }

  handleMaterialSlideShow=(id)=>{
    router.push(`/detail?id=${id}`);
  };
  renderMaterial(){
    let vDOM=[],{materialList} = this.state;
    materialList.forEach(item=>{
      let {main_id,img} = item;
      vDOM.push( <li key={main_id} onClick={()=>{this.handleMaterialSlideShow(main_id)}}>
        <img data-src={`${IMG_HOST_IP}/chosen/${img}`} alt=""/>
      </li>)
    });
    return vDOM;
  }
  renderManuscripts(){
    let vDOM=[],{manuscriptsList} = this.state;
    manuscriptsList.forEach(item=>{
      let {main_id,img} = item;
      vDOM.push( <img data-src={`${IMG_HOST_IP}/chosen/${img}`} alt="" key={main_id} onClick={()=>{this.handleMaterialSlideShow(main_id)}}/>)
    });
    return vDOM;
  }
  render() {
    return (
      <div className={style.homeContainer}>
        {/* 轮播图 */}
        <div className={style.carsuselContainer}>
          <Carousel autoplay style={{ height: "480px" }}>
            <div>
              <h3><img src={LB1} alt=""/></h3>
            </div>
            <div>
              <h3><img src={LB2} alt=""/></h3>
            </div>
            <div>
              <h3><img src={LB3} alt=""/></h3>
            </div>
          </Carousel>
        </div>
        {/* 潮流发布 */}
        <div className={style.pubileTitle}>
            <h3>潮流发布</h3>
            <p>秀场直击，最IN的前沿时尚资讯</p>
          </div>
        <div className={style.trend}>

          <div className={style.trendList}>
            <div className={style.trendListContainer}>
              {this.renderFashion()}
            </div>
          </div>

        </div>
        <div className={style.buttonPubilc}>
                <p><Link to="/runway">查看全部潮流发布</Link></p>
            </div>
         {/* 品牌聚焦 */}
         <div className={style.brand}>
            <div className={style.pubileTitle}>
                <h3>品牌聚焦</h3>
                <p>世界品牌，最新潮流，一网打尽</p>
            </div>
            <div className={style.brandList}>
                  {this.renderStyle()}
            </div>
            <div className={style.buttonPubilc}>
              <p><Link to="/style">查看全部品牌咨询</Link></p>
            </div>
         </div>
        {/* 图案 &amp; 素材 */}
        <div className={style.picture}>
            <h3>图案 &amp; 素材</h3>
            <div className={`${style.pictureList} ${style.clearfix}`}>
                <div className={style.pictureLeft}>
                   {this.renderManuscripts()}
                  <p><Link to="/material">查看更多素材</Link></p>
                </div>
                <div className={`${style.pictureRight} ${style.clearfix}`}>
                    <ul>{this.renderMaterial()}</ul>
                </div>
            </div>
            <div className={style.buttonPubilc}>
              <p><Link to="/design">查看更多图案</Link></p>
            </div>
        </div>
      </div>

    );
  }
}
export default Home;
