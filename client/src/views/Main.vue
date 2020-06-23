<template>
  <div class="grid">
    <MainPane />

    <div class="info-pane p-2 pb-1">
      <div class="card rounded-xl">
        <p class="temp text-6xl font-bold text-gray-100">83°</p>
        <p class="date text-6xl font-bold text-gray-100">
          {{ time | moment("dddd, MMMM Do") }}
        </p>
        <p class="time text-6xl font-bold text-gray-100">
          {{ time | moment("h:mm A") }}
        </p>
      </div>
    </div>

    <div class="video-pane p-2 pt-1">
      <div class="card rounded-xl flex justify-center">
        <div class="self-center">
          <div class="video-placeholder" />
        </div>
      </div>
    </div>

    <div class="footer-pane px-2">
      <Footer class="card rounded-xl rounded-b-none" />
    </div>
  </div>
</template>

<script>
import Footer from "@/components/Footer";
import MainPane from "@/components/MainPane";

export default {
  components: {
    Footer,
    MainPane
  },
  data() {
    return {
      time: new Date()
    };
  },
  computed: {
    temps() {
      return this.$store.getters.temps;
    },
    isPumpEnergized() {
      return this.$store.getters.findEquipment("pump").isEnergized;
    },
    isLightEnergized() {
      return this.$store.getters.findEquipment("light").isEnergized;
    },
    isFanEnergized() {
      return this.$store.getters.findEquipment("fan").isEnergized;
    }
  },
  methods: {
    updateTime() {
      this.clockInterval = setInterval(() => {
        this.time = new Date();
      }, 1000);
    },
    pollTemp() {
      this.pollingInterval = setInterval(() => {
        this.$store.dispatch("fetchTemps");
      }, 30000);
    }
  },
  created() {
    this.$store.dispatch("fetchTemps");
    this.pollTemp();
    this.updateTime();
  },
  beforeDestroy() {
    clearInterval(this.pollingInterval);
    clearInterval(this.clockInterval);
  }
};
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 0.5fr 0.5fr;
  grid-template-rows: 0.45fr 0.45fr 0.1;
  min-width: 100%;
}

.main-pane {
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  height: 90vmin;
}

.info-pane {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  height: 45vmin;
}

.video-pane {
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  height: 45vmin;
}

.footer-pane {
  grid-column: 1 / 3;
  grid-row: 3 / 4;
  height: 10vmin;
}

.video-placeholder {
  color: gainsboro;
}
</style>
