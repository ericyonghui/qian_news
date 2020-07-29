import React, { PureComponent } from "react";
import LazyLoad from "react-lazyload";
import style from "../../page/Material/index.less";

class MaterialList extends PureComponent {
  componentDidMount() {}

  renderList() {
    let vDOM = [];
    let { data: { list } } = this.props;
    if (list.length > 0) {
      list.forEach(item => {
        let {key,main_id,img,imgHeight} = item;
        vDOM.push(
          <div key={key} className={style.column} onClick={()=>{}}>
            <span className={style.tip}>NEW</span>
            <LazyLoad  height={0}>
              <img src={`http://106.37.96.145:2019/chosen/${img}`} alt="" style={{
                height:`${imgHeight}px`
              }}/>
            </LazyLoad>
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
