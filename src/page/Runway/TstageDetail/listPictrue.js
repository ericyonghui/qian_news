import React from "react";
import { Row, Col ,Progress} from "antd";
import { HeartOutlined, HeartFilled ,ClusterOutlined,AppstoreOutlined, RotateRightOutlined} from "@ant-design/icons";
import img1 from "../../../assets/11.jpg";
import img2 from "../../../assets/2.jpg"
import style from "./listPictrue.less";

export default class ListPicture extends React.Component {
  constructor() {
    super();
    this.state = {
        visible: false,
      list: [
        {
          id: "1",
          src: img1,
          num: "001",
          flag:false
        },
        {
          id: "2",
          src: img2,
          num: "002",
          flag:true
        },
        {
          id: "3",
          src: img1,
          num: "003",
          flag:false
        },
        {
          id: "4",
          src: img1,
          num: "004",
          flag:false
        },
        {
          id: "5",
          src: img1,
          num: "005",
          flag:false
        },
        {
          id: "6",
          src: img1,
          num: "006",
          flag:false
        },
        {
          id: "7",
          src: img1,
          num: "007",
          flag:false
        },
        {
          id: "8",
          src: img1,
          num: "008",
          flag:false
        },
        {
          id: "9",
          src: img1,
          num: "009",
          flag:false
        },
        {
          id: "10",
          src: img1,
          num: "10",
          flag:false
        }
      ]
    };
  }
  render() {
    return (
      <div>
        <Row className={style.pictureContainer}>
          
          <div className={style.title}>
          <p>千尚</p>
            
          </div>
          {this.state.list.map(item => (
            <Col
              xl={6}
              lg={8}
              md={12}
              sm={24}
              xs={24}
              className={style.pictureList}
              key={item.id}
            >
              <div className={style.list}>
                <img src={item.src} alt=""/>
                {item.flag?<HeartFilled className={style.iconPosition} />:<HeartOutlined className={style.iconPosition}  />}
                
                
                
          <p className={style.numPosition}>{item.num}</p>
              </div>
            </Col>
          ))}

          <div className={style.picTabIcon}>
            <AppstoreOutlined className={style.picTabIconi}/>
            <Progress percent={30} size="small" type="circle" width="60px"/>
          </div>

        </Row>
      </div>
    );
  }
}
