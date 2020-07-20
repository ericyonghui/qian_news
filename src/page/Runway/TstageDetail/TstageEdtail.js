import React from "react"

import ListPictrue from "./listPictrue"
import SwiperPictrue from "./swiperPicture"

import style from "./TstageEdtail.less"

export default class TstageEdtail extends React.Component{
    constructor(){
        super();
        this.state={}
    }
    render(){
        return (
            <div className={style.detail}>
                {/* <ListPictrue></ListPictrue> */}
                <SwiperPictrue></SwiperPictrue>
            </div>
        )
    }
}