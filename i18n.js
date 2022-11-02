
import { createI18n } from 'vue-i18n'
import en from "./src/locals/en.json"
import de from "./src/locals/de.json"
const i18n = createI18n({
    legacy: false,
    locale: 'de', 
    fallbackLocale: 'en',
    messages: {
      en,
      de
    } 
  })
export default i18n;