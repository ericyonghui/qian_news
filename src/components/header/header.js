import React from "react"
import ReactDOM from "react-dom"
import { Row, Col ,Menu ,Input, Divider} from 'antd'
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import Media from 'react-media';

import style from"./header.less"

export default class HeaderComponent extends React.Component {
    state = {
        current: 'index',
      };
      handleClick = e => {
        this.setState({
          current: e.key,
        });
      };
    render() {
        return (
            <div>
                {/* pc header */}
                <Row className={`${style.header} ${style.clearfix} ${style.PCcontainer}`}>
                        <Col span={2} className={`${style.logo}`}> 千尚</Col>
                        <Col span={10}>
                        <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" className={`${style.menu}`} style={{border:0}}>
                            <Menu.Item key="index">
                                首页
                            </Menu.Item>
                            <Menu.Item key="Ttai">
                                T台
                            </Menu.Item>
                            <Menu.Item key="kuanshi">
                                款式
                            </Menu.Item>
                            <Menu.Item key="jiepai">
                                街拍
                            </Menu.Item>
                            <Menu.Item key="tuan">
                                图案
                            </Menu.Item>
                            <Menu.Item key="sucai">
                                素材
                            </Menu.Item>
                            <Menu.Item key="tupianku">
                                图片库
                            </Menu.Item>
                        </Menu>
                        </Col>
                        
                        <Col span={10} className={`${style.search}`}>
                        <Input placeholder="搜索更多" /> 
                        </Col>
                        <Col span={2} className={`${style.login}`}>
                            <a href="#">登录</a>
                            <a href="#">注册</a>
                        </Col>
                    </Row> 
                
            </div>
            
        )
    }
}

