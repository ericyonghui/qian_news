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
        // 款式 详情 多图
        {path:'/Multigraph' , component:'./design/Multigraph/Multigraph'},
        // 图案
        {path:'/pattern' , component:'./pattern/pattern'},
        // 图案详情
        {path:'/patternInfo' , component:'./pattern/patternInfo/patternInfo'},
        // T 台
        {path:'/Tstage',component:'./Tstage/Tstage'},
        // T 台详细
        {path:'/TstageDetail',component:'./Tstage/TstageDetail/TstageEdtail'}

      ]
    }
  ],
};
