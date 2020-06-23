<template>
  <footer id="footer">
    <div class="flex h-full items-center">
      <router-link
        v-bind:class="{ 'active': isReports }"
        class="text-2xl flex-grow text-gray-700 text-center gray"
        to="/reports"
      >
        <span class="text-3xl font-semibold text-gray-100">Reports</span>
      </router-link>

      <router-link
        v-bind:class="{ 'active': isMain }"
        class="text-2xl flex-grow text-gray-700 text-center gray"
        to="/"
      >
        <span class="text-3xl font-semibold text-gray-100">Main</span>
      </router-link>

      <router-link
        v-bind:class="{ 'active': isMaintenance }"
        class="text-2xl flex-grow text-gray-700 text-center gray"
        to="/maintenance"
      >
        <span class="text-3xl font-semibold text-gray-100">Maintenance</span>
      </router-link>
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    isReports() {
      return this.$route.name === "Reports";
    },
    isMain() {
      return this.$route.name === "Main";
    },
    isMaintenance() {
      return this.$route.name === "Maintenance";
    }
  }
}
</script>

<style scoped>
#footer {
  height: 10vh;
}

.active span {
  color: cyan
}
</style>
