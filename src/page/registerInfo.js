import React from 'react'
import Link from 'umi/link';
import { Result, Button } from 'antd';

export default () => (
  <Result
    status="success"
    title="注册成功"
    subTitle="欢迎加入千尚"
    extra={
      <Link to="/">
        <Button type="primary">
          返回首页
        </Button>
      </Link>
    }
  />
);
