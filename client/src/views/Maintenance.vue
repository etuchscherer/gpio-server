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

    <Footer class="fixed bottom-0 w-full card rounded-xl rounded-b-none" />
  </div>
</template>

<script>
import ManualSwitch from "@/components/ManualSwitch";
import Footer from "@/components/Footer";

export default {
  computed: {
    isEnergized() {
      return this.$store.getters.findEquipment("pump").isEnergized;
    }
  },
  methods: {
    togglePump() {
      const { isEnergized } = this.$store.getters.findEquipment("pump");
      this.$store.dispatch("togglePump", !isEnergized);
    },
    pollForStatus() {
      this.pollingId = setInterval(() => {
        this.$store.dispatch("syncStatus");
      }, 25000);
    }
  },
  components: {
    ManualSwitch,
    Footer
  },
  created() {
    this.$store.dispatch("syncStatus");

    this.pollForStatus();
  },
  beforeDestroy() {
    clearInterval(this.pollingId);
  }
};
</script>
