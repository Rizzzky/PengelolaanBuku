<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const isOpen = ref(true)
const router = useRouter()

const toggleSidebar = () => {
  isOpen.value = !isOpen.value
}

const handleLogout = () => {
  router.push('/')
}
</script>

<template>
  <div class="sidebar" :class="{ 'collapsed': !isOpen }">
    <button class="toggle-btn" @click="toggleSidebar">
      {{ isOpen ? '←' : '→' }}
    </button>
    <div class="logo">
      <h2 v-if="isOpen">Book Manager</h2>
    </div>
    <nav class="menu">
      <router-link to="/" class="menu-item" :title="!isOpen ? 'Home' : ''">
        <span class="icon">🏠</span>
        <span v-if="isOpen">Home</span>
      </router-link>
      <router-link to="/books" class="menu-item" :title="!isOpen ? 'Daftar Buku' : ''">
        <span class="icon">📚</span>
        <span v-if="isOpen">Daftar Buku</span>
      </router-link>
      <router-link to="/delete" class="menu-item" :title="!isOpen ? 'Hapus Buku' : ''">
        <span class="icon">🗑️</span>
        <span v-if="isOpen">Hapus Buku</span>
      </router-link>
      <button @click="handleLogout" class="menu-item logout" :title="!isOpen ? 'Keluar' : ''">
        <span class="icon">🚪</span>
        <span v-if="isOpen">Keluar</span>
      </button>
    </nav>
  </div>
</template>

<style scoped>
.sidebar {
  width: 250px;
  height: 100vh;
  background-color: #2c3e50;
  color: white;
  position: fixed;
  left: 0;
  top: 0;
  padding: 20px 0;
  transition: width 0.3s;
}

.sidebar.collapsed {
  width: 60px;
}

.toggle-btn {
  position: absolute;
  right: -15px;
  top: 20px;
  background: #2c3e50;
  border: none;
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 100;
}

.logo {
  padding: 0 20px;
  margin-bottom: 30px;
  text-align: center;
}

.menu-item {
  padding: 15px 20px;
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: background-color 0.3s;
}

.icon {
  margin-right: 10px;
  font-size: 1.2rem;
}

.collapsed .icon {
  margin-right: 0;
}

.menu-item:hover {
  background-color: #34495e;
}

.logout {
  margin-top: auto;
  border: none;
  background: none;
  color: white;
  cursor: pointer;
  width: 100%;
  text-align: left;
  font-size: 1rem;
}
</style>