<template>
  <div
    class="flex-1 text-3xl leading-loose text-gray-700 text-center bg-gray-400 px-4 py-2 m-2"
    v-bind:class="{ active: isEnergized }"
    v-on:click="energize"
  >
    {{ equipment | capitalize }} {{ status | capitalize }}
  </div>
</template>

<script>
import { capitalize } from "@/filters/index";

export default {
  props: {
    equipment: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      equipmentState: this.$store.getters.findEquipment(this.equipment)
    };
  },
  filters: {
    capitalize
  },
  methods: {
    energize() {
      if (!this.equipmentState.isEnabled) {
        console.debug("attempted to energize disabled equipment");
        return false;
      }

      this.$store.dispatch(`toggle_${this.$props.equipment}`);
    }
  },
  computed: {
    status() {
      const { isEnabled, isEnergized } = this.equipmentState;

      if (!isEnabled) {
        return "disabled";
      }

      if (isEnergized) {
        return "on";
      } else {
        return "off";
      }
    },
    isEnergized() {
      return this.equipmentState.isEnergized;
    }
  }
};
</script>

<style lang="scss" scoped>
.active {
  background-color: green;
  color: white;
}
</style>
