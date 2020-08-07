import React, { PureComponent } from "react";
import {lazyLoad} from '../../util/utils';
import { Row, Col } from "antd";
import style from "../../page/FashionStyle/BrandList/index.less";

class BrandList extends PureComponent {
  componentDidMount() {
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

  renderList() {
    let vDOM = [];
    let {
      data: { list },handleSlideShow
    } = this.props;
    if (list.length > 0) {
      list.forEach(item => {
        let {
          key,
          primary_key,
          img
        } = item;
        vDOM.push(
          <Col
            xl={3}
            lg={4}
            md={6}
            sm={12}
            xs={12}
            className={style.item}
            key={key}
          >
            <div onClick={() => {handleSlideShow(primary_key)}} className={style.itemIMG}>
              <img data-src={`http://106.37.96.145:2019${img}`} alt="" />
            </div>
          </Col>
        );
      });
    }
    return vDOM;
  }

  render() {
    return <Row>{this.renderList()}</Row>;
  }
}
export default BrandList;
