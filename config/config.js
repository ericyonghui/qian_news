export default {
  singular: true,
  plugins: [
    ['umi-plugin-react', {
      antd: true,
      locale: {
        enable: true,
      },
      dynamicImport: {
        webpackChunkName: true,
        level: 3,
      },
    }],
  ],
  hash:true,
  routes: [
    {
      path: '/',
      component: '../layout',
      routes: [
        {
          path: '/',
          redirect: '/home',
        },
        { path: './home', component: './Home'},
        //款式 list
        {path:'./design' , component:'./design/design'},
        // 款式 详情 多图
        {path:'./Multigraph' , component:'./design/Multigraph/Multigraph'},
        // 款式 详情 单图
        {path:'./Monograph', component:'./design/Monograph/Monograph'}
      ]
    },
    
  ],
};
