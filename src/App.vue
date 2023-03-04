<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <!--
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/book">Book</RouterLink>
        -->
      </nav>
  </header>

  <RouterView />
</template>

<style>
#app{
  min-width: 100% !important;
}
@media (min-width: 1024px) {
  #app{
    grid-template-columns:1fr !important;
  }
}

header nav {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>
