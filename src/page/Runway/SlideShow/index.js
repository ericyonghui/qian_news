import React, { PureComponent } from 'react';
import ListPicture from "../../../components/Runway/SlideShow/listPicture"
import SwiperPicture from "../../../components/Runway/SlideShow/swiperPicture"
import style from "./index.less"

class SlideShow extends PureComponent{
  state={
    flag:false
  };
  render(){
    return (
      <div className={style.detail}>
        {
          this.state.flag?<ListPicture></ListPicture>:<SwiperPicture></SwiperPicture>
        }

      </div>
    )
  }
}
export default SlideShow;
