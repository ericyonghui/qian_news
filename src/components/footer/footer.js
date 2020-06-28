import React, { PureComponent } from 'react';
import { Row, Col } from "antd";
import { WeiboOutlined ,WechatOutlined ,PlayCircleOutlined } from '@ant-design/icons';
import style from "./footer.less"

class FooterComponent extends PureComponent{

    

    render(){
        return (
            <div className={`${style.clearfix} ${style.container}`}>
                <Row>
                    <Col 
                        lg={{span:2,offset:2}} 
                        md={{span:2,offset:2}} 
                        sm={24}
                        xs={24}
                        className={`${style.footerLogo}`}>
                            <p>千尚</p>
                    </Col>
                    <Col 
                    lg={3} md={3} sm={12} xs={12}
                    className={`${style.navFooter}`}>
                        <ul>
                            <li>关于千尚</li>
                            <li>了解我们的团队</li>
                            <li>联络我们</li>
                            <li>帮助中心</li>
                            <li>法律信息</li>
                        </ul>
                    </Col>
                    <Col 
                    lg={3} md={3} sm={12} xs={12}
                    className={`${style.navFooter}`}>
                        <ul>
                            <li>微博</li>
                            <li>千尚APP</li>
                        </ul>
                    </Col>
                    <Col 
                    lg={6} md={6} sm={12} xs={12}>
                        <h2>联系我们</h2>
                        <ul className={`${style.navFooter}`}>
                            <li>客户经理</li>
                            <li>clivezhang</li>
                            <li>clivezhang@qianshang.com.cn</li>
                        </ul>
                    </Col>
                    <Col lg={3} md={3} sm={12} xs={12}>
                        
                            <WeiboOutlined style={{marginRight:'15px',color:"#bbb"}}/>
                            <WechatOutlined style={{marginRight:"15px",color:'#bbb'}} />
                            <PlayCircleOutlined style={{color:"#bbb"}}/>
                        
                    </Col>
                </Row>
            </div>
        )
    }
}

export default FooterComponent