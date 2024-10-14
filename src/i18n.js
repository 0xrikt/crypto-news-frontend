import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          latestNews: 'Latest News',
          relatedCryptos: 'Related Cryptocurrencies',
          bullish: 'Bullish',
          bearish: 'Bearish',
          loading: 'Loading...',
          publishedOn: 'Published on',
          source: 'Source',
        }
      },
      zh: {
        translation: {
          latestNews: '最新新闻',
          relatedCryptos: '相关加密货币',
          bullish: '看涨',
          bearish: '看跌',
          loading: '加载中...',
          publishedOn: '发布于',
          source: '来源',
        }
      }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;