<template>
  <div class="main-pane p-2 pr-0">
    <div class="card grid-main-pane h-full rounded-xl">
      <div class="grid-main-pane-data flex justify-center items-center">
        <div class="text-6xl font-bold text-gray-100">
          {{ temps.degreesCelsuis | toDegreesFahrenheit }}°
        </div>
      </div>
      <div class="grid-main-pane-light flex justify-center items-center">
        <font-awesome-icon
          v-if="isLightEnergized"
          icon="sun"
          size="6x"
          spin
          :style="{ color: 'ffae42' }"
        />

        <font-awesome-icon v-else icon="sun" size="6x" inverse />
      </div>
      <div class="grid-empty-pane" />
      <div class="grid-main-pane-intake flex justify-center items-center">
        <font-awesome-icon
          v-if="isFanEnergized"
          icon="wind"
          size="6x"
          :style="{ color: 'black' }"
        />
        <font-awesome-icon v-else icon="wind" size="6x" inverse />
      </div>
      <div class="grid-main-mane-plant flex justify-center items-center">
        <font-awesome-icon
          icon="seedling"
          size="6x"
          :style="{ color: 'baf733' }"
        />
      </div>
      <div class="grid-main-pane-exhaust flex justify-center items-center">
        <font-awesome-icon
          v-if="isFanEnergized"
          icon="wind"
          size="6x"
          :style="{ color: 'black' }"
        />
        <font-awesome-icon v-else icon="wind" size="6x" inverse />
      </div>
      <div class="grid-main-pane-pumps flex justify-center items-center">
        <font-awesome-icon
          v-if="isPumpEnergized"
          icon="water"
          size="6x"
          :style="{ color: 'cyan' }"
        />
        <font-awesome-icon v-else icon="water" size="6x" inverse />
      </div>
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
    isLightEnergized() {
      return this.$store.getters.findEquipment("light").isEnergized;
    },
    isFanEnergized() {
      return this.$store.getters.findEquipment("fan").isEnergized;
    },
    isPumpEnergized() {
      return this.$store.getters.findEquipment("pump").isEnergized;
    }
  },
  filters: {
    toDegreesFahrenheit
  }
};
</script>

<style lang="scss" scoped>
.grid-main-pane {
  display: grid;
  grid-template-columns: 0.3fr 0.3fr 0.3fr;
  grid-template-rows: 0.3fr 0.3fr 0.3fr;
}

.grid-empty-pane {
  grid-column: 3 / 4;
  grid-row: 1 / 2;
}

.grid-main-pane-data {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}

.grid-main-pane-light {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
}

.grid-main-pane-intake {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
}

.grid-main-pane-plant {
  grid-column: 2 / 3;
  grid-row: 2 / 3;
}

.grid-main-pane-exhaust {
  grid-column: 3 / 4;
  grid-row: 2 / 3;
}

.grid-main-pane-pumps {
  grid-column: 1 / 4;
  grid-row: 3 / 4;
}
</style>
