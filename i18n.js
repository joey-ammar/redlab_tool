/* Create The Translation engine */
import { createI18n } from 'vue-i18n'
/* Import the locals */
import en from "./src/locals/en.json"
import de from "./src/locals/de.json"
/* Create the I18n */
const i18n = createI18n({
    legacy: false,
    locale: {
      en,
      de
    }, 
    fallbackLocale: 'en',
    messages: {
      en,
      de
    } 
  })


export default i18n;