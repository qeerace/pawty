import Vue from "vue";
import firebase from "firebase";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { firebaseConfig } from "../firebase.config";

let app = "";

Vue.config.productionTip = false;

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

firebase.auth().onAuthStateChanged(firebaseUser => {
  if (!app) {
    Vue.config.devtools = process.env.NODE_ENV === "development";
    app = new Vue({
      router,
      store,
      vuetify,
      render: h => h(App),
      created() {
        store.dispatch("setUser", firebaseUser);
      }
    }).$mount("#app");
  }
});
