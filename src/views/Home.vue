<script setup>
import QuickActions from '../components/QuickActions.vue'
</script>

<template>
  <div class="container">
    <h1>Selamat Datang di Book Manager</h1>
    <p class="subtitle">Pilih aksi cepat di bawah ini atau gunakan menu samping untuk navigasi</p>
    <QuickActions />
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.subtitle {
  color: #666;
  margin-bottom: 20px;
}
</style>