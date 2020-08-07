import React, { PureComponent } from "react";
import {lazyLoad} from '../../util/utils';
import style from "../../page/Material/index.less";

class MaterialList extends PureComponent {
  state={
    columnWidth: 236.33
  };
  componentDidMount() {
    window.addEventListener('resize',this.handleWidth);
    let imgArr = document.querySelectorAll('img');
    lazyLoad(imgArr);
    window.addEventListener('scroll',this.handleImgScroll);
  }

  handleImgScroll=async ()=>{
    let imgArr = document.querySelectorAll('img');
    await lazyLoad(imgArr);
  };

  handleWidth=()=>{
    if(this.column){
      let columnWidth =this.column.clientWidth;
      this.setState({columnWidth});
    }
  };
  componentWillUnmount() {
    window.removeEventListener('resize',this.handleWidth);
    window.removeEventListener('scroll',this.handleImgScroll);
  }

  renderHeight(imgWidth,imgHeight){
    let imgH =this.state.columnWidth / imgWidth * imgHeight;
    return `${parseInt(imgH)}px`;
  }
  renderBoxHeight=(imgWidth,imgHeight)=>{
    let imgH =this.state.columnWidth / imgWidth * imgHeight;
    if(imgH > 500){
      return  `${parseInt(imgH / 2)}px`;
    } else {
      return  '';
    }
  };
  renderList() {
    let vDOM = [];
    let { data: { list },handleSlideShow } = this.props;
    if (list.length > 0) {
      list.forEach(item => {
        let {key,main_id,img,imgWidth,imgHeight} = item;
        let boxHeight = this.renderBoxHeight(imgWidth,imgHeight);
        if(boxHeight!==''){
          vDOM.push(
            <div key={key} className={style.column} style={{ height:boxHeight }} onClick={()=>{handleSlideShow(main_id)}} ref={(c) => {
              this.column = c;
            }}>
              {/* <span className={style.tip}>NEW</span> */}
                <img data-src={`http://106.37.96.145:2019/chosen/${img}`} alt="" style={{
                  height:`${this.renderHeight(imgWidth,imgHeight)}`
                }}/>
              <div className={style.mark}></div>
            </div>
          );
        } else {
          vDOM.push(
            <div key={key} className={style.column} onClick={()=>{handleSlideShow(main_id)}} ref={(c) => {
              this.column = c;
            }}>
              {/* <span className={style.tip}>NEW</span> */}
                <img data-src={`http://106.37.96.145:2019/chosen/${img}`} alt="" style={{
                  height:`${this.renderHeight(imgWidth,imgHeight)}`
                }}/>
              <div className={style.mark}></div>
            </div>
          );
        }
      });
    }
    return vDOM;
  }

  render() {
    return <div className={style.container}>
      {this.renderList()}
    </div>;
  }
}
export default MaterialList;
