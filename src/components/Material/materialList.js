import React, { PureComponent } from "react";
import LazyLoad from "react-lazyload";
import style from "../../page/Material/index.less";

class MaterialList extends PureComponent {
  state={
    columnWidth: 236.33
  };
  componentDidMount() {
    window.addEventListener('resize',this.handleWidth)
  }

  handleWidth=()=>{
    if(this.column){
      let columnWidth =this.column.clientWidth;
      this.setState({columnWidth});
    }
  };
  componentWillUnmount() {
    window.addEventListener('resize',this.handleWidth);
  }

  renderList() {
    let vDOM = [];
    let { data: { list },handleSlideShow } = this.props;
    if (list.length > 0) {
      list.forEach(item => {
        let {key,main_id,img,imgWidth,imgHeight} = item;
        vDOM.push(
          <div key={key} className={style.column} onClick={()=>{handleSlideShow(main_id)}} ref={(c) => {
            this.column = c;
          }}>
            <span className={style.tip}>NEW</span>
            <LazyLoad  height={0}>
              <img src={`http://106.37.96.145:2019/chosen/${img}`} alt="" style={{
                height:`${this.state.columnWidth / imgWidth * imgHeight}px`
              }}/>
            </LazyLoad>
            <div className={style.mark}></div>
          </div>
        );
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
