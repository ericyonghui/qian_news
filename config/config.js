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
      path: '/slideShow',
      component: '../layout/SlideShow',
      routes: [
        // 款式 详情 多图
        {path:'/slideShow/Multigraph' , component:'./design/Multigraph/Multigraph'},
        // 款式 详情 单图
        {path:'/slideShow/Monograph', component:'./design/Monograph/Monograph'}
      ]
    },
    {
      path: '/',
      component: '../layout',
      routes: [
        {
          path: '/',
          redirect: '/home',
        },
        { path: '/home', component: './Home'},
        //款式 list
        {path:'/design' , component:'./design/design'},
      ]
    }
  ],
};
