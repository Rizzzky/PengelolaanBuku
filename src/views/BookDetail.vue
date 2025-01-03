<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { getBook } from '../store/books'

const route = useRoute()
const book = computed(() => getBook(parseInt(route.params.id)))
</script>

<template>
  <div class="container" v-if="book">
    <h2>Book Details</h2>
    <div class="book-details">
      <h3>{{ book.title }}</h3>
      <p><strong>Author:</strong> {{ book.author }}</p>
      <p><strong>Year:</strong> {{ book.year }}</p>
      
      <div class="button-group">
        <router-link :to="'/edit/' + book.id" class="edit-button">Edit</router-link>
        <router-link to="/" class="back-button">Back to List</router-link>
      </div>
    </div>
  </div>
  <div v-else class="container">
    <h2>Book not found</h2>
    <router-link to="/" class="back-button">Back to List</router-link>
  </div>
</template>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.book-details {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.button-group {
  margin-top: 20px;
}

.edit-button, .back-button {
  display: inline-block;
  padding: 10px 20px;
  border-radius: 4px;
  text-decoration: none;
  margin-right: 10px;
}

.edit-button {
  background: #2196F3;
  color: white;
}

.back-button {
  background: #757575;
  color: white;
}
</style>