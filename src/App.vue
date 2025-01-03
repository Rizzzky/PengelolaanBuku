<script setup>
import Sidebar from './components/Sidebar.vue'
</script>

<template>
  <div class="app">
    <Sidebar />
    <main class="main-content">
      <router-view></router-view>
    </main>
  </div>
</template>

<style>
.app {
  min-height: 100vh;
  background-color: #f5f5f5;
  display: flex;
}

.main-content {
  flex: 1;
  margin-left: 250px;
  padding: 20px;
  transition: margin-left 0.3s;
}

.sidebar.collapsed + .main-content {
  margin-left: 60px;
}
</style>