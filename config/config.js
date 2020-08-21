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
      path: '/member',
      component: '../layout/otherIndex',
      routes: [
        {path:'/member/register',component:'./Register'},
        {
          component: 'registerInfo',
        }
      ]
    },
    {
      path: '/slideShow',
      component: '../layout/SlideShow',
      routes: [
        // T 台详细
        {path:'/slideShow/runway_slideShow',component:'./Runway/SlideShow',Routes: ['src/components/Authorized']},
        // 街拍详细
        {path:'/slideShow/streetSnap_slideShow',component:'./StreetSnap/SlideShow',Routes: ['src/components/Authorized']},
        // 款式商品详细
        {path:'/slideShow/brand_slideShow',component:'./FashionStyle/SlideShow',Routes: ['src/components/Authorized']}
      ]
    },
    {
      path: '/',
      component: '../layout',
      routes: [
        { path: '/',redirect: '/runway',Routes: ['src/components/Authorized']},
        { path: '/home', component: './Home'},
        // T台列表
        {path:'/runway',component:'./Runway',Routes: ['src/components/Authorized']},
        //款式列表
        {path:'/style',component:'./FashionStyle',Routes: ['src/components/Authorized']},
        //款式单品牌列表
        {path:'/brand',component:'./FashionStyle/BrandList',Routes: ['src/components/Authorized']},
        // 街拍列表
        {path:'/streetSnap',component:'./StreetSnap',Routes: ['src/components/Authorized']},
        //图案列表
        {path:'/design' , component:'./Design',Routes: ['src/components/Authorized']},
        //素材列表
        {path:'/material' , component:'./Material',Routes: ['src/components/Authorized']},
        //图案素材详情
        {path:'/detail' , component:'./Material/Detail', Routes: ['src/components/Authorized']},
        {path:'/search' , component:'./searchMobile/searchMobile' , Routes: ['src/components/Authorized']},
      ]
    }
  ],
};
