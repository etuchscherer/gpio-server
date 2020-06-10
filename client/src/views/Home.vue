<template>
  <div>
    <div class="flex flex-col bg-gray-200 m-4">
      <h1 class="px-4">This is the main dashboard</h1>
    </div>

    <div class="flex-1 text-xl">
      internal temp
      <span class=text-6xl>
        {{ temps.degreesCelsius | toDegreesFahrenheit }}°F
      </span>
      {{ temps.degreesCelsius }}°C
    </div>

    <div class="flex-1 text-xl">
      last action was <span class="text-4xl">5 minutes ago</span>
    </div>

    <div class="flex-1">
      Pump is OFF
    </div>
    <div class="flex-1">
      Lights are ON
    </div>
    <div class="flex-1">
      Fans are DISABLED
    </div>
  </div>
</template>

<script>
import { toDegreesFahrenheit } from "@/filters/index";

export default {
  computed: {
    temps() {
      return this.$store.getters.temps;
    }
  },
  filters: {
    toDegreesFahrenheit
  },
  methods: {
    pollTemp() {
      this.pollingInterval = setInterval(() => {
        this.$store.dispatch("fetchTemps");
      }, 3000);
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
