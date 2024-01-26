import './tailwind.postcss';
import DefaultTheme from 'vitepress/theme';

DefaultTheme.enhanceApp = ({ app, router, siteData }) => {
  router.onBeforeRouteChange = (to) => {
    console.log('路由将改变为: ', to);
    if (typeof _hmt !== 'undefined') {
      _hmt.push(['_trackPageview', to]);
    }
  };
};
export default { ...DefaultTheme };
