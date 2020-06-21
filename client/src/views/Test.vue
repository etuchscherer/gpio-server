<template>
  <div class="grid">
    <MainPane />

    <div class="info-pane p-2 pb-1">
      <div class="card rounded-xl">
        <p class="temp text-6xl font-bold text-gray-100">83°</p>
        <p class="date text-6xl font-bold text-gray-100">1/17/91</p>
        <p class="time text-6xl font-bold text-gray-100">3:46 PM</p>
      </div>
    </div>

    <div class="video-pane p-2 pt-1">
      <div class="card rounded-xl flex justify-center">
        <div class="self-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="500"
            height="250"
            viewBox="0 0 500 250"
          >
            <rect fill="#ddd" width="500" height="250" />
            <text
              fill="rgba(0,0,0,0.5)"
              font-family="sans-serif"
              font-size="30"
              dy="10.5"
              font-weight="bold"
              x="50%"
              y="50%"
              text-anchor="middle"
            >
              300×150
            </text>
          </svg>
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
</style>
