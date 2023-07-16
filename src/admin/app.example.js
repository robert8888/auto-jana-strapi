const config = {
  locales: [
    // 'ar',name
    // 'fr',
    // 'cs',
    'de',
    // 'dk',
    // 'es',
    // 'he',
    // 'id',
    // 'it',
    // 'ja',
    // 'ko',
    // 'ms',
    // 'nl',
    // 'no',
    'pl',
    // 'pt-BR',
    // 'pt',
    // 'ru',
    // 'sk',
    // 'sv',
    // 'th',
    // 'tr',
    // 'uk',
    // 'vi',
    // 'zh-Hans',
    // 'zh',
  ],
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
  translations: {
    en: {
      'app.components.LeftMenu.navbrand.name': 'Custom name',
      'app.components.LeftMenu.navbrand.title': 'Custom title',
    }
  }
};
