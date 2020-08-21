import React, { PureComponent } from "react";
import Link from 'umi/link';
import { Result, Button } from 'antd';

class error403 extends PureComponent {
  renderDom(){
    const {errorFlag} = this.props;
    if(parseInt(errorFlag)===1){
      return <Result
        status="403"
        title="403"
        subTitle="你没有此页面的访问权限,请进行登录!"
      />;
    } else {
      return <Result
        status="403"
        title="403"
        subTitle="你没有此页面的访问权限,请进行登录!"
        extra={
          <Link to="/">
            <Button type="primary">
              返回首页
            </Button>
          </Link>
        }
      />
    }
  }

  render(){
    return this.renderDom();
  }
}

export default error403;
