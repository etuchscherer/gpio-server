<template>
  <footer id="footer">
    <div class="flex h-full items-center">
      <router-link
        class="text-2xl flex-grow text-gray-700 text-center gray"
        to="/reports"
      >
        <span class="text-3xl font-semibold text-gray-100">Reports</span>
      </router-link>

      <router-link
        class="text-2xl flex-grow text-gray-700 text-center gray"
        to="/"
      >
        <span class="text-3xl font-semibold text-gray-100">Main</span>
      </router-link>

      <router-link
        class="text-2xl flex-grow text-gray-700 text-center gray"
        to="/maintenance"
      >
        <span class="text-3xl font-semibold text-gray-100">Maintenance</span>
      </router-link>
    </div>
  </footer>
</template>

<style scoped>
#footer {
  height: 10vh;
}
</style>
