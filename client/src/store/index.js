import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    components: {
      pump: {
        isEnergized: false,
        enabled: true
      },
      light: {
        isEnergized: false,
        enabled: false
      },
      fan: {
        isEnergized: false,
        enabled: false
      }
    }
  },
  getters: {
    pump(state) {
      return state.components.pump;
    }
  },
  mutations: {
    setPump(state, isEnergized) {
      state.components.pump.isEnergized = isEnergized;
    }
  },
  actions: {
    togglePump({ commit }) {
      fetch("http://localhost:3000/pins/18/2", { method: "POST" })
        .then(r => r.json())
        .then(data => {
          commit("setPump", data.isEnergized);
        });
    }
  },
  modules: {}
});
