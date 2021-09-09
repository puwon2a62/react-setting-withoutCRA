import i18n from 'i18next'
import * as ko from '~locales/ko-KR.json'

i18n.init({
  lng: 'ko',
  interpolation: {
    escapeValue: true
  },
  resources: {
    ko: {
      common: ko
    }
  }
})

export default i18n
