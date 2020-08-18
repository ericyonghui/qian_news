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
        // T 台详细
        {path:'/slideShow/runway_slideShow',component:'./Runway/SlideShow'},
        // 街拍详细
        {path:'/slideShow/streetSnap_slideShow',component:'./StreetSnap/SlideShow'},
        // 款式商品详细
        {path:'/slideShow/brand_slideShow',component:'./FashionStyle/SlideShow'}
      ]
    },
    {
      path: '/',
      component: '../layout',
      routes: [
        {
          path: '/',
          redirect: '/runway',
        },
        { path: '/home', component: './Home'},
        // T台列表
        {path:'/runway',component:'./Runway'},
        //款式列表
        {path:'/style',component:'./FashionStyle'},
        //款式单品牌列表
        {path:'/brand',component:'./FashionStyle/BrandList'},
        // 街拍列表
        {path:'/streetSnap',component:'./StreetSnap'},
        //图案列表
        {path:'/design' , component:'./Design'},
        //素材列表
        {path:'/material' , component:'./Material'},
        //图案素材详情
        {path:'/detail' , component:'./Material/Detail'},
        {path:'/search' , component:'./searchMobile/searchMobile'},
        // login
        {path:'/Login',component:'./login/Login'}
      ]
    }
  ],
};
