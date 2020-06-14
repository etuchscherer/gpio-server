<template>
  <footer>
    <div class="flex items-stretch bg-gray-200 h-18">
      <router-link
        class="flex-1 text-2xl text-gray-700 text-center bg-gray-400 h-32 p-8 m-2"
        to="/reports"
      >
        <p>Reports</p>
      </router-link>

      <router-link
        class="flex-1 text-2xl text-gray-700 text-center bg-gray-400 h-32 p-8 m-2"
        to="/"
      >
        <p>Main</p>
      </router-link>

      <router-link
        class="flex-1 text-2xl text-gray-700 text-center bg-gray-400 h-32 p-8 m-2"
        to="/maintenance"
      >
        Maintenance
      </router-link>
    </div>
  </footer>
</template>
