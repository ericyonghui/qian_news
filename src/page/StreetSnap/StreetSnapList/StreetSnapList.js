import React from "react"
import {Row, Col ,Pagination} from "antd"
import style from "./StreetSnapList.less"

import img1 from "../../../assets/11.jpg";

export default class StreeSpanList extends React.Component{
    constructor(){
        super();
        this.state={
            list:[
                {
                    id:'01',
                    src:img1
                },
                {
                    id:'02',
                    src:img1
                },
                {
                    id:'03',
                    src:img1
                },
                {
                    id:'04',
                    src:img1
                },
                {
                    id:'05',
                    src:img1
                },
                {
                    id:'06',
                    src:img1
                },
                {
                    id:'07',
                    src:img1
                },
                {
                    id:'08',
                    src:img1
                },
                {
                    id:'09',
                    src:img1
                },
                {
                    id:'10',
                    src:img1
                }
            ]
        }
    }

    onShowSizeChange=()=>{

    }

    render(){
        return (
            <div className={style.StreetContainer}>
                <div className={style.title}>
                    <h4>2020春夏 欧美街拍</h4> 
                    <span>clive 2020 6.17</span>
                </div>
                <Row className={`${style.StreetList} ${style.clearfix}`}>
                    {
                        this.state.list.map((item,index)=>(
                            <Col lg={3} xl={3} md={6} sm={12} xs={12} key={item.id} className={style.picture}>
                                <img src={item.src} alt=""/>
                            </Col>
                        ))
                    }
                    
                    <div className={style.pagination}>
                        <Pagination defaultCurrent={1} total={50} />
                    </div>
                </Row>
                
            </div>
        )
    }
}