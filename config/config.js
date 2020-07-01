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
        {path:'./design' , component:'./design/design'}
      ]
    },
    
  ],
};
