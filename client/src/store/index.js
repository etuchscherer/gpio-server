import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    temps: {
      degreesCelsius: 100,
      lastUpdated: undefined
    },
    equipment: {
      pump: {
        isEnergized: false,
        isEnabled: true
      },
      light: {
        isEnergized: false,
        isEnabled: true
      },
      fan: {
        isEnergized: false,
        isEnabled: false
      }
    }
  },
  getters: {
    temps(state) {
      return state.temps;
    },
    findEquipment(state) {
      return name => {
        return state.equipment[name];
      };
    },
    pump(state) {
      return state.equipment.pump;
    },
    fan(state) {
      return state.equipment.fan;
    }
  },
  mutations: {
    setPump(state, pump) {
      state.equipment.pump.isEnergized = pump.isEnergized;
      state.equipment.pump.isEnabled = pump.isEnabled;
    },
    setFan(state, fan) {
      state.equipment.fan.isEnergized = fan.isEnergized;
      state.equipment.fan.isEnabled = fan.isEnabled;
    },
    setLight(state, light) {
      state.equipment.light.isEnergized = light.isEnergized;
      state.equipment.light.isEnabled = light.isEnabled;
    },
    setTemps(state, degreesCelsius, lastUpdated) {
      state.temps.degreesCelsius = degreesCelsius;
      state.temps.lastUpdated = lastUpdated;
    },
  },
  actions: {
    toggle_pump({ commit }) {
      fetch("http://localhost:3000/toggle/pump", { method: "POST" })
        .then(r => r.json())
        .then(data => {
          commit("setPump", data.isEnergized);
        });
    },
    toggle_fan({ commit }) {
      fetch("http://localhost:3000/toggle/fan", { method: "POST" })
        .then(r => r.json())
        .then(data => {
          commit("setFan", data.isEnergized);
        });
    },
    toggle_light({ commit }) {
      fetch("http://localhost:3000/toggle/light", { method: "POST" })
        .then(r => r.json())
        .then(data => {
          commit("setLight", data.isEnergized);
        });
    },
    fetchTemps({ commit }) {
      fetch("http://localhost:3000/temps")
        .then(r => r.json())
        .then(data => {
          const { degreesCelsius, lastUpdated } = data;
          commit("setTemps", degreesCelsius, lastUpdated);
        });
    },
    syncStatus({ commit }) {
      fetch("http://localhost:3000/sync")
        .then(r => r.json())
        .then(equipment => {
          console.log('Dump status', equipment);
          const { light, fan, pump } = equipment;
          // debugger;
          commit("setLight", light);
          commit("setFan", fan);
          commit("setPump", pump);

        })
    }
  },
  modules: {}
});
