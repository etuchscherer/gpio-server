<template>
  <div>
    <div class="flex flex-col bg-gray-200 m-4">
      <h1 class="px-4">This is the root</h1>
    </div>

    <div class="flex items-stretch bg-gray-200 h-24 m-4">
      <div
        v-on:click="togglePump"
        v-bind:class="{ active: isEnergized }"
        class="flex-1 text-3xl leading-loose text-gray-700 text-center bg-gray-400 px-4 py-2 m-2"
      >
        Pump On
      </div>
      <div
        class="flex-1 text-3xl leading-loose text-gray-700 text-center bg-gray-400 px-4 py-2 m-2"
      >
        Light Disabled
      </div>
      <div
        class="flex-1 text-3xl leading-loose text-gray-700 text-center bg-gray-400 px-4 py-2 m-2"
      >
        Fan Disabled
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isEnergized() {
      return this.$store.getters.pump.isEnergized;
    }
  },
  methods: {
    togglePump() {
      const { isEnergized } = this.$store.getters.pump;
      this.$store.dispatch("togglePump", !isEnergized);
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
