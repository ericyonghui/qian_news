import React, { PureComponent } from "react";
import Link from 'umi/link';
import router from 'umi/router';
import {Form, Checkbox, Spin,Alert} from "antd";
import axios from "../../util/axios";
import style from "../header/header.less";


const md5 = require('md5');

class Login extends PureComponent {
  formRef = React.createRef();
  state={
    submitting: true,
    spinLoading: false,
  };

  loginReq=async (username,password)=>{
    let result = await axios({
      method:"POST",
      url:`/u/login`,
      data:{
        username,password: md5(password)
      }
    });
    let {code,token,user} = result;
    if(code === 200){
      let {nickname} = user;
      this.setState({submitting: true});
      localStorage.setItem('username', nickname);
      localStorage.setItem('token', token);
      router.push("/home");
    } else {
      this.setState({submitting: false});
    }
  };
  handleFinishFailed = async ({ values })  => {

  };
  handleLogin=async ()=>{

  }

  render() {
    return (
      <div className={style.loginMark} style={{
        display: this.props.loginMark
      }}>
        <div className={style.content}>
          <h4>登陆千尚</h4>
          <Form ref={this.formRef} onFinishFailed={this.handleFinishFailed}>
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
      </div>
    )
  };
}
export default Login;
