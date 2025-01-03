<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <div class="quick-actions">
    <button class="action-btn" @click="router.push('/books')">
      <span class="icon">📚</span>
      <span>Daftar Buku</span>
    </button>
    <button class="action-btn" @click="router.push('/add')">
      <span class="icon">➕</span>
      <span>Tambah Buku</span>
    </button>
    <button class="action-btn" @click="router.push('/delete')">
      <span class="icon">🗑️</span>
      <span>Hapus Buku</span>
    </button>
  </div>
</template>

<style scoped>
.quick-actions {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 30px;
}

.action-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.action-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

.icon {
  font-size: 2rem;
  margin-bottom: 10px;
}
</style>