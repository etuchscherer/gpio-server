<template>
  <div>
    <div class="flex flex-col bg-gray-200 m-4">
      <h1 class="px-4">This is the root</h1>
    </div>

    <div class="flex items-stretch bg-gray-200 h-24 m-4">
      <div
        class="flex-1 text-3xl leading-loose text-gray-700 text-center bg-blue-100 px-4 py-2 m-2"
      >
        <p>
          {{ temps.degreesCelsius | toDegreesFahrenheit }}°F
          <span class="text-xl">{{ temps.degreesCelsius }}°C</span>
        </p>
      </div>

      <router-link
        class="flex-1 text-3xl leading-loose text-gray-700 text-center bg-gray-400 px-4 py-2 m-2"
        to="/controls"
      >
        Overrides
      </router-link>
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
  mounted() {
    setInterval(() => {
      this.$store.dispatch("fetchTemps");
    }, 30000);
  }
};
</script>
