import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import fa from "vuetify/es5/locale/fa";
import "@mdi/font/css/materialdesignicons.css";

Vue.use(Vuetify);

export default new Vuetify({
  // rtl: true,

  // lang: {
  //   current: "fa",
  //   locales: { fa },
  // },

  icons: {
    iconfont: "mdi",
  },
});
