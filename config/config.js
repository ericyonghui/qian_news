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
        {path:'/slideShow/Monograph', component:'./design/Monograph/Monograph'},
        // T 台详细
        {path:'/slideShow/runway_slideShow',component:'./Runway/SlideShow'}
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

        // 款式 详情 多图
        {path:'/Multigraph' , component:'./design/Multigraph/Multigraph'},

        // 图案详情
        {path:'/patternInfo' , component:'./pattern/patternInfo/patternInfo'},
        // T 台
        {path:'/runway',component:'./Runway'},
        //款式
        {path:'/style',component:'./FashionStyle'},
        // 街拍
        {path:'/streetSnap',component:'./StreetSnap'},
        //图案
        {path:'/design' , component:'./Design'},
        //素材
        {path:'/material' , component:'./Material'},

        {path:'/streetSnapList',component:'./StreetSnap/StreetSnapList/StreetSnapList'}

      ]
    }
  ],
};
