<script setup>
import { books } from '../store/books'
</script>

<template>
  <div class="container">
    <h2>Daftar Buku</h2>
    <div class="books-grid">
      <div v-for="book in books" :key="book.id" class="book-card">
        <h3>{{ book.title }}</h3>
        <p><strong>Penulis:</strong> {{ book.author }}</p>
        <p><strong>Tahun:</strong> {{ book.year }}</p>
        <div class="button-group">
          <router-link :to="'/book/' + book.id" class="button view">Lihat Detail</router-link>
          <router-link :to="'/edit/' + book.id" class="button edit">Edit</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.books-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.book-card {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.book-card h3 {
  margin: 0 0 10px 0;
  color: #2c3e50;
}

.button-group {
  display: flex;
  gap: 10px;
  margin-top: 15px;
}

.button {
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: white;
  flex: 1;
  text-align: center;
}

.view {
  background: #3498db;
}

.edit {
  background: #2ecc71;
}

.button:hover {
  opacity: 0.9;
}
</style>