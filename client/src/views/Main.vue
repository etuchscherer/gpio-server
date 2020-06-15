<template>
  <div>
    <div class="flex flex-col bg-gray-200 m-4">
      <h1 class="px-4">This is the main dashboard</h1>
    </div>

    <div class="flex-1 text-xl">
      internal temp
      <span class="text-6xl">
        {{ temps.degreesCelsius | toDegreesFahrenheit }}°F
      </span>
      {{ temps.degreesCelsius }}°C
    </div>

    <div class="flex-1 text-xl">
      last action was <span class="text-4xl">5 minutes ago</span>
    </div>

    <div class="flex-1">
      <span v-if="isPumpEnergized">Pump is On</span>
      <span v-else>Pump is OFF</span>
    </div>
    <div class="flex-1">
      <span v-if="isLightEnergized">Light is On</span>
      <span v-else>Light is OFF</span>
    </div>
    <div class="flex-1">
      <span v-if="isFanEnergized">Fan is On</span>
      <span v-else>Fan is OFF</span>
    </div>
  </div>
</template>

<script>
import { toDegreesFahrenheit } from "@/filters/index";

export default {
  computed: {
    temps() {
      return this.$store.getters.temps;
    },
    isPumpEnergized() {
      return this.$store.getters.pump.isEnergized;
    },
    isLightEnergized() {
      return this.$store.getters.light.isEnergized;
    },
    isFanEnergized() {
      return this.$store.getters.fan.isEnergized;
    }
  },
  filters: {
    toDegreesFahrenheit
  },
  methods: {
    pollTemp() {
      this.pollingInterval = setInterval(() => {
        this.$store.dispatch("fetchTemps");
      }, 30000);
    }
  },
  created() {
    this.$store.dispatch("fetchTemps");
    this.pollTemp();
  },
  beforeDestroy() {
    clearInterval(this.pollingInterval);
  }
};
</script>
