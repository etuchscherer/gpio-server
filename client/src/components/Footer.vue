<template>
  <footer>
    <div class="flex items-stretch bg-gray-200 h-18">
      <div class="flex-1 pa-2 m-2"></div>
      <router-link
        class="flex-1 text-2xl text-gray-700 text-center bg-gray-400 pa-2 m-2"
        to="/"
      >
        <p>Main</p>
      </router-link>

      <router-link
        class="flex-1 text-2xl text-gray-700 text-center bg-gray-400 pa-2 m-2"
        to="/controls"
      >
        Overrides
      </router-link>
    </div>
  </footer>
</template>