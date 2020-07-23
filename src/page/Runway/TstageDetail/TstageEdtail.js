import React from "react"

import ListPictrue from "./listPictrue"
import SwiperPictrue from "./swiperPicture"

import style from "./TstageEdtail.less"

export default class TstageEdtail extends React.Component{
    constructor(){
        super();
        this.state={
            flag:false
        }
    }
    render(){
        return (
            <div className={style.detail}>
                {
                    this.state.flag?<ListPictrue></ListPictrue>:<SwiperPictrue></SwiperPictrue>
                }
               
            </div>
        )
    }
}