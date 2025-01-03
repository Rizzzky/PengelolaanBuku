<script setup>
import { books } from '../store/books'
import { ref } from 'vue'

const deleteBook = (id) => {
  const index = books.value.findIndex(book => book.id === id)
  if (index !== -1) {
    books.value.splice(index, 1)
  }
}
</script>

<template>
  <div class="container">
    <h2>Hapus Buku</h2>
    <div class="books-list">
      <div v-for="book in books" :key="book.id" class="book-item">
        <div class="book-info">
          <h3>{{ book.title }}</h3>
          <p>Penulis: {{ book.author }}</p>
          <p>Tahun: {{ book.year }}</p>
        </div>
        <button @click="deleteBook(book.id)" class="delete-button">
          Hapus
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
}

.books-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.book-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.book-info h3 {
  margin: 0 0 5px 0;
}

.book-info p {
  margin: 5px 0;
  color: #666;
}

.delete-button {
  background: #e74c3c;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.delete-button:hover {
  background: #c0392b;
}
</style>