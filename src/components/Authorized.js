import React, { PureComponent } from 'react';
import { connect } from 'dva';
import axios from "../util/axios";

class Authorized extends PureComponent {
  state = {
    isFlag: false
  };
  // componentDidMount(){
  //   this.queryToken();
  // }
  queryToken=async ()=>{
    let result = await axios({
      method:"POST",
      url:"/u/ckToken",
    });
    if(result && typeof result.code!=='undefined'){
      let {code} = result;
      if(code !== 200){
        localStorage.removeItem('nickname');
        localStorage.removeItem('token');
        this.props.queryLoginFlag({nickname:'',loginFlag: false});
      } else if(code === 200) {
        const nickname = localStorage.getItem('nickname');
        if(nickname){
          this.props.queryLoginFlag({nickname,loginFlag: true});
        }
      }
    }
  };
  render() {
    return this.props.children
  }
}
export default connect(state => ({
  headerModel: state.headerModel,
}), dispatch=>({
  queryLoginFlag:payload=> dispatch({ type: 'headerModel/queryLoginFlag', payload })
}))(Authorized);
