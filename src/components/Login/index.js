import React, { PureComponent } from "react";
import Link from 'umi/link';
import {Form, Checkbox,Alert} from "antd";
import {CloseOutlined} from "@ant-design/icons"
import axios from "../../util/axios";
import style from "../header/header.less";

const md5 = require('md5');

class Login extends PureComponent {
  formRef = React.createRef();
  state={
    submitting: true,
    spinLoading: false,
    rememberFlag: false,
    usernameMsg:'',
    passwordMsg:''
  };

  handleFinishFailed = async ({ values })  => {
    let usernameMsg='',passwordMsg='';
    if(typeof values.username==='undefined' || values.username===''){
      usernameMsg = '用户名不能为空'
    }
    if(typeof values.password==='undefined' || values.password===''){
      passwordMsg = '登录密码不能为空'
    }
    this.setState({
      usernameMsg,
      passwordMsg
    })
  };
  handleLogin=async ()=>{
    try{
      const res = await this.formRef.current.validateFields();
      const {usernameMsg,passwordMsg} =this.state;
      if(usernameMsg==='' && passwordMsg===""){
        const {username,password} = res;
        //新增
        let result = await axios({
          method:"POST",
          url:`/u/login`,
          data:{
            username,password: md5(password)
          }
        });
        let {code,user} = result;
        if(code === 200){
          let {nickname} = user;
          this.setState({submitting: true});
          localStorage.setItem('nickname', nickname);
          this.props.handleShowNickName();
          this.props.handleSetLoginMark('none');
        } else {
          this.setState({submitting: false});
        }
      }
    }catch (e) {
      return false;
    }
  };
  renderMessage = content => (
    <Alert
      style={{
        marginBottom: 24,
      }}
      message={content}
      type="error"
      showIcon
    />
  );
  handleLogOut=()=>{
    localStorage.removeItem('nickname');
    localStorage.removeItem('token');
    this.props.handleSetLoginMark('none');
  };
  render() {
    return (
        <div className={style.content}>
          <h4>登陆千尚</h4>
          <CloseOutlined className={style.iconPostion} onClick={this.handleLogOut}/>
          <Form ref={this.formRef} onFinishFailed={this.handleFinishFailed}>
            {!this.state.submitting && this.renderMessage('账户或密码错误')}
            <ul>
              <Form.Item
                noStyle
                label="用户名"
                name="username"
                rules={[{required: true}]}
              >
                <li>
                  <span className={style.labelName}>用户名</span>
                  <input type="text" className={style.inputBox}/>
                  { this.state.usernameMsg!=='' &&
                    <p className={style.on}>{this.state.usernameMsg}</p>
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
                  <span className={style.labelName}>密码</span>
                  <input type="password" className={style.inputBox}/>
                  { this.state.passwordMsg!=='' &&
                    <p className={style.on}>{this.state.passwordMsg}</p>
                  }
                </li>
              </Form.Item>
              <Form.Item
                noStyle
              >
                <li className={style.clearfix}>
                  <Checkbox style={{float:'left'}}>记录登陆状态</Checkbox>
                  <a href="#" className={style.forgetPassword}>忘记密码</a>
                </li>
              </Form.Item>
              <Form.Item
                noStyle
              >
                <li>
                  <button type="submit"  className={style.loginBtn} onClick={this.handleLogin}>登陆</button>
                </li>
              </Form.Item>
              <Form.Item
                noStyle
              >
                <li>
                  还没有千尚账号？<Link to="/member/register">立即注册</Link>
                </li>
              </Form.Item>
            </ul>
          </Form>
        </div>
    )
  };
}
export default Login;
