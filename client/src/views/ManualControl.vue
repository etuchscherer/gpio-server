<template>
  <div>
    <div class="flex flex-col bg-gray-200 m-4">
      <h1 class="px-4">These are manual overrides</h1>
    </div>

    <div class="flex items-stretch bg-gray-200 h-24 m-4">
      <ManualSwitch equipment="pump" />
      <ManualSwitch equipment="light" />
      <ManualSwitch equipment="fan" />
    </div>
  </div>
</template>

<script>
import ManualSwitch from "@/components/ManualSwitch";

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
  },
  components: {
    ManualSwitch
  }
};
</script>
