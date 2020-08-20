import React, { PureComponent } from "react";
import {Form, Row, Col,message} from "antd";
import router from 'umi/router';
import GraphicsValidation from '../../components/GraphicsValidation';
import axios from '../../util/axios';
import style from './index.less';

const md5 = require('md5');
const userNameReg=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{5,20}$/;
const phoneReg=/^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/;
const passwordReg=/^(?!^[0-9]+$)(?!^[a-zA-Z]+$)(?!^[!@#$%^&*_]+$)[0-9a-zA-Z!@#$%^&*_]{6,}$/;


let loginTimer=null;

class Register extends PureComponent {
  state={
    code: '',
    codeLength: 4,
    fontSizeMin: 25,
    fontSizeMax: 30,
    backgroundColorMin: 240,
    backgroundColorMax: 250,
    colorMin: 10,
    colorMax: 20,
    lineColorMin: 40,
    lineColorMax: 180,
    contentWidth: 96,
    contentHeight: 38,
    clickFlag: true,
    usernameMsg:'',
    phoneMsg:'',
    graphCodeMsg:'',
    messageCodeMsg:'',
    passwordMsg:''
  };
  formRef = React.createRef();
  queryExistUserName=async (uName)=>{
    let result = await axios({
      method:"POST",
      url:`/u/existUserName`,
      data:{
        uName
      }
    });
    const { data} = result;
    return data;
  };
  queryExistPhone=async (phone)=>{
    let result = await axios({
      method:"POST",
      url:`/u/existPhone`,
      data:{
        phone
      }
    });
    const { data} = result;
    return data;
  };
  sendSms=async (phone)=>{
    let result = await axios({
      method:"POST",
      url:`/u/sendSms`,
      data:{
        phone
      }
    });
    const {data} = result;
    return data;
  };

  handleFinishFailed = async ({ values })  => {
    let usernameMsg='',phoneMsg='',passwordMsg='',graphCodeMsg='',messageCodeMsg='';
    //用户名验证
    if(typeof values.username==='undefined' || values.username===''){
      usernameMsg = '用户名不能为空'
    } else if(!userNameReg.test(values.username)){
      usernameMsg = '用户名以字母和数字组成，5-20字符'
    } else {
      //从数据库进行查询用户名是否存在
      let resFLag = await this.queryExistUserName(values.username);
      if(!resFLag){
        usernameMsg = '用户名已存在'
      }
    }
    //手机号验证
    if(typeof values.phone==='undefined' || values.phone===''){
      phoneMsg = '手机号码不能为空'
    } else if(!phoneReg.test(values.phone)){
      phoneMsg = '手机号码输入不规范'
    } else {
      //从数据库进行查询用户名是否存在
      let resFLag = await this.queryExistPhone(values.phone);
      if(!resFLag){
        phoneMsg = '手机号码已注册'
      }
    }
    //图形验证码验证
    if(typeof values.graphCode==='undefined' || values.graphCode.toLowerCase() === ''){
      graphCodeMsg = '图形验证码不能为空'
    } else if(values.graphCode.toLowerCase() !== '' && values.graphCode.toLowerCase() !== this.state.code.toLowerCase()){
      graphCodeMsg = '图形验证码输入不正确'
    }

    //短信验证码验证
    if(typeof values.messageCode==='undefined' || values.messageCode === ''){
      messageCodeMsg = '短信验证码不能为空'
    } else if(!/^\d{6}$/.test(values.messageCode)){
      messageCodeMsg = '短信验证码输入不规范'
    }
    //密码验证
    if(typeof values.password==='undefined' || values.password===''){
      passwordMsg = '登录密码不能为空'
    } else if(!passwordReg.test(values.password)){
      passwordMsg = '由6位以上字母、数字或特殊符号组成'
    }

    this.setState({
      usernameMsg,
      phoneMsg,
      passwordMsg,
      graphCodeMsg,
      messageCodeMsg,
      phone: values.phone
    })
  };
  handleUserNameBlur=async (e)=>{
    let usernameMsg='';
    if(typeof e.target.value==='undefined' || e.target.value===''){
      usernameMsg = '用户名不能为空'
    } else if(!userNameReg.test(e.target.value)){
      usernameMsg = '用户名以字母和数字组成，5-20字符'
    } else {
      //从数据库进行查询用户名是否存在
      let resFLag = await this.queryExistUserName(e.target.value);
      if(!resFLag){
        usernameMsg = '用户名已存在'
      }
    }
    this.setState({
      usernameMsg
    });
  };
  handlePhoneBlur=async(e)=>{
    let phoneMsg='';
    if(typeof e.target.value==='undefined' || e.target.value===''){
      phoneMsg = '手机号码不能为空'
    } else if(!phoneReg.test(e.target.value)){
      phoneMsg = '手机号码输入不规范'
    } else {
      //从数据库进行查询用户名是否存在
      let resFLag = await this.queryExistPhone(e.target.value);
      if(!resFLag){
        phoneMsg = '手机号码已注册'
      }
    }
    this.setState({
      phoneMsg
    });
  };
  handlePasswordBlur=(e)=>{
    let passwordMsg='';
    if(typeof e.target.value==='undefined' || e.target.value===''){
      passwordMsg = '登录密码不能为空'
    } else if(!passwordReg.test(e.target.value)){
      passwordMsg = '由6位以上字母、数字或特殊符号组成'
    }
    this.setState({
      passwordMsg
    });
  };
  handleGraphCodeBlur=(e)=>{
    let graphCodeMsg='';
    if(typeof e.target.value==='undefined' || e.target.value ===''){
      graphCodeMsg='图形验证码不能为空';
    } else if(e.target.value.toLowerCase() !== '' && e.target.value.toLowerCase() !== this.state.code.toLowerCase()){
      graphCodeMsg='图形验证码输入不正确';
    }
    this.setState({
      graphCodeMsg
    });
  };
  handleMessageCodeBlur=(e)=>{
    let messageCodeMsg='';
    //短信验证码验证
    if(typeof e.target.value==='undefined' || e.target.value ===''){
      messageCodeMsg = '短信验证码不能为空'
    } else if(!/^\d{6}$/.test(e.target.value)){
      messageCodeMsg = '短信验证码输入不规范'
    }
    this.setState({
      messageCodeMsg
    });
  };
  handleGraphicsCode=(code)=>{
    const _this = this;
    _this.setState({code},()=>{
      _this.formRef.current.setFieldsValue({
        graphCode: "",
      });
      if(this.graphCodeInput){
        this.graphCodeInput.value='';
      }
    });
  };
  handleGetCode=async ()=>{
    if(this.phoneInput){
      let phone = this.phoneInput.value;
      if(typeof phone!=='undefined' && phone!=='' && phoneReg.test(phone)){
        let resFLag = await this.queryExistPhone(phone);
        if(resFLag){
          const res = await this.sendSms(phone);
          if(res ==='success'){
            this.handleTimer();
            message.success('发送成功');
          } else if(res ==='repeat'){
            message.warn('验证码已发送,5分钟内有效');
          } else if(res ==='fail'){
            message.error('发送失败');
          }
        }
      }
    }
  };
  handleTimer=()=>{
    let wait = 60;
    this.setState({
      clickFlag: false,
    },()=>{
      let getCode = document.getElementById('getCode');
      getCode.innerHTML = wait + "秒后重试";
      loginTimer = setInterval(()=>{
        if(wait === 60){
          wait--;
        }
        if(wait === 0){
          clearInterval(loginTimer);
          this.setState({clickFlag: true});
          return;
        }
        let getCode = document.getElementById('getCode');
        getCode.innerHTML = wait + "秒后重试";
        wait--;
      },1000);
    })
  };

  handleFill=async ()=>{
    try{
      const res = await this.formRef.current.validateFields();
      const {usernameMsg,phoneMsg,passwordMsg,graphCodeMsg,messageCodeMsg} =this.state;
      if(usernameMsg==='' && phoneMsg==="" && passwordMsg==="" && graphCodeMsg==="" && messageCodeMsg===""){
        const {messageCode,password,phone,username} = res;
        let result = await axios({
          method:"POST",
          url:"/u/register",
          data: {
            username,phone,messageCode,password: md5(password)
          }
        });
        let {code,msg} = result;
        if(code === 200){
          clearInterval(loginTimer);
          router.push('/member/registerInfo')
        } else {
          message.error(msg);
        }
      } else {
        return false;
      }
    }catch (e) {
      return false;
    }
  };

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
          <Form ref={this.formRef} onFinishFailed={this.handleFinishFailed}>
            <ul>
              <Form.Item
                noStyle
                label="用户名"
                name="username"
                rules={[{required: true}]}
              >
                <li>
                  <span>用户名</span>
                  <input type="text" placeholder='请输入用户名!' onBlur={this.handleUserNameBlur}/>
                  {/* p classname on 为错误提示 */}
                  { this.state.usernameMsg!=='' &&
                    <p className={style.on}>{this.state.usernameMsg}</p>
                  }
                  {
                    this.state.usernameMsg==='' &&
                    <p>登陆账号，以字母和数字组成，5-20字符</p>
                  }
                </li>
              </Form.Item>
              <Form.Item
                noStyle
                label="手机号"
                name="phone"
                rules={[{required: true}]}
              >
                <li>
                  <span>手机号</span>
                  <input type="text" ref={(c) => {
                    this.phoneInput = c;
                  }} placeholder='请输入手机号!'  onBlur={this.handlePhoneBlur}/>
                  { this.state.phoneMsg!=='' &&
                  <p className={style.on}>{this.state.phoneMsg}</p>
                  }
                </li>
              </Form.Item>
              <Form.Item
                noStyle
                label="图形验证码"
                name="graphCode"
                rules={[{required: true}]}
              >
                <li>
                  <span>图形验证码</span>
                  <input type="text"  ref={(c) => {
                    this.graphCodeInput = c;
                  }} placeholder='请输入图形验证码!' onBlur={this.handleGraphCodeBlur}/>
                  { this.state.graphCodeMsg!=='' &&
                    <p className={style.on}>{this.state.graphCodeMsg}</p>
                  }
                  <GraphicsValidation
                    handleGraphicsCode={this.handleGraphicsCode}
                  />
                </li>
              </Form.Item>
              <Form.Item
                noStyle
                label="短信验证码"
                name="messageCode"
                rules={[{required: true}]}
              >
                <li>
                  <span>短信验证码</span>
                  <input type="text"  placeholder='请输入短信验证码!' onBlur={this.handleMessageCodeBlur}/>
                  { this.state.messageCodeMsg!=='' &&
                    <p className={style.on}>{this.state.messageCodeMsg}</p>
                  }
                  {
                    this.state.clickFlag ? (
                      <a href='#' className={style.YZ} onClick={this.handleGetCode}>发送验证码</a>
                    ):(<a href='#' className={style.YZ} id="getCode" />)
                  }
                </li>
              </Form.Item>
              <Form.Item
                noStyle
                label="密码"
                name="password"
                rules={[{required: true}]}
              >
                <li>
                  <span>登陆密码</span>
                  <input type="password" placeholder='请输入密码!'  onBlur={this.handlePasswordBlur}/>
                  { this.state.passwordMsg!=='' &&
                    <p className={style.on}>{this.state.passwordMsg}</p>
                  }
                  {
                    this.state.passwordMsg==='' &&
                    <p>由6位以上字母、数字或特殊符号组成</p>
                  }
                </li>
              </Form.Item>
              <Form.Item
                noStyle
              >
                <li>
                  <button type="submit" className={style.submitButton} onClick={this.handleFill}>立即注册</button>
                </li>
              </Form.Item>
              <Form.Item
                noStyle
              >
                <li>
                  <p>提交注册，即代表同意 <a href="#">千尚注册协议</a></p>
                </li>
              </Form.Item>
            </ul>
          </Form>
        </div>
      </Col>
    </Row>
  }
}
export default Register;
