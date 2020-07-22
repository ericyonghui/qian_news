import React, { PureComponent } from 'react';
import { Row, Col ,Progress} from "antd";
import { IMG_HOST } from "../../../util/common";
import { HeartOutlined, HeartFilled ,AppstoreOutlined,BorderOutlined} from "@ant-design/icons";
import style from "./listPicture.less";

class ListPicture extends PureComponent {

  render() {
    const {imgList,handleSwitch} = this.props;
    return (
      <div>
        <Row className={style.pictureContainer}>
          <div className={style.title}>
          <p>千尚</p>
          </div>
          {imgList.map(item => (
            <Col
              xl={6}
              lg={8}
              md={12}
              sm={24}
              xs={24}
              className={style.pictureList}
              key={item.img_id}
            >
              <div className={style.list}>
                <img src={`${IMG_HOST}/webp${item.img}`} alt="" />
                {item.flag?<HeartFilled className={style.iconPosition} />:<HeartOutlined className={style.iconPosition}  />}
                <p className={style.numPosition}>{item.key< 10 ? `0${item.key}`: item.key}</p>
             </div>
            </Col>
          ))}

          <div className={style.picTabIcon} onClick={()=>{handleSwitch(false)}}>
            <BorderOutlined className={style.picTabIconi}/>
            {/*<Progress percent={30} size="small" type="circle" width="60px"/>*/}
          </div>

        </Row>
      </div>
    );
  }
}
export default ListPicture;
