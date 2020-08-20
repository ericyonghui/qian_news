import React, { PureComponent } from "react";
import {Row,Col} from "antd"
import style from './login.less';

export default class Login extends React.Component{
    constructor(){
        super();
        state:{}
    }
    render(){
        return <Row className={style.LoginContainer}>
            <Col lg={8} xl={8} md={12} xs={24} sm={24} className={style.bg}>
                <h2>发现时尚</h2>
                <h2 className={style.titleP}>定义时尚</h2>
                <p><span>千尚</span>致力于用最前沿的人工智能技术为服装产业提供AI相关产品及应用解决发难，通过AI赋能助力客户及合作伙伴提升效率和价值</p>
            </Col>
            <Col lg={4} xl={8} md={12} xs={24} sm={24} className={style.context}>
               <div className={style.just}>
               <p>会员专享权利</p>
                <ul>
                    <li>潮流趋势、手绘高清图无限下载</li>
                    <li>海量图案、服装效果等可编辑素材</li>
                    <li>时尚知识图谱</li>
                    <li>智能设计工具抢先体验</li>
                    <li>售后客服专属服务</li>
                </ul>
               </div>
            </Col>
            <Col lg={12} xl={8} md={24} sm={24} xs={24} className={style.form}>
                <h2>加入千尚</h2>
                <div>
                    <form>
                        <ul>
                            <li>
                                <span>用户名</span>
                                <input type="text"/>
                                {/* p classname on 为错误提示 */}
                                {/* <p className={style.on}>用户名错误</p> */}
                                <p>登陆账号，以字母和数字组成，5-20字符</p>
                            </li>
                            <li>
                                <span>手机号</span>
                                <input type="text"/>
                                <p></p>
                            </li>
                            <li>
                                <span>图形验证码</span>
                                <input type="text"/>
                                <img src="" className={style.IMG} alt=""/>
                            </li>
                            <li>
                                <span>短信验证码</span>
                                <input type="text"/>
                                <a className={style.YZ}>发送验证码</a>
                            </li>
                            <li>
                                <span>登陆密码</span>
                                <input type="password"/>
                                <p>由6位以上字母、数字或特殊符号组成</p>
                            </li>
                            <li>
                                <button type="submit" className={style.submitButton}>立即注册</button>
                            </li>
                            <li>
                                <p>提交注册，即代表同意 <a>千尚注册协议</a></p>
                            </li>
                        </ul>
                    </form>
                </div>
            </Col>
        </Row>
    }
}