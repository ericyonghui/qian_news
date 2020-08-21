import React, { PureComponent } from 'react'
import axios from "../util/axios";

class Authorized extends PureComponent {
  state = {
    isFlag: false
  };
  componentDidMount(){
    this.queryToken();
  }
  queryToken=async ()=>{
    let result = await axios({
      method:"POST",
      url:"/u/ckToken",
    });
    if(typeof result.code!=='undefined'){
      let {code} = result;
      if(code !== 200){
        localStorage.removeItem('nickname');
        localStorage.removeItem('token');
      }
    }
  };
  render() {
    return this.props.children
  }
}
export default Authorized;
