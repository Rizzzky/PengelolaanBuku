<script setup>
import { ref } from 'vue'
import { addBook } from '../store/books'
import { useRouter } from 'vue-router'

const router = useRouter()
const newBook = ref({
  title: '',
  author: '',
  year: ''
})

const handleSubmit = () => {
  addBook(newBook.value)
  router.push('/')
}
</script>

<template>
  <div class="container">
    <h2>Add New Book</h2>
    <form @submit.prevent="handleSubmit" class="book-form">
      <div class="form-group">
        <label>Title:</label>
        <input v-model="newBook.title" required>
      </div>
      
      <div class="form-group">
        <label>Author:</label>
        <input v-model="newBook.author" required>
      </div>
      
      <div class="form-group">
        <label>Year:</label>
        <input v-model="newBook.year" type="number" required>
      </div>
      
      <button type="submit" class="submit-button">Add Book</button>
      <router-link to="/" class="cancel-button">Cancel</router-link>
    </form>
  </div>
</template>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.book-form {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.submit-button {
  background: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;
}

.cancel-button {
  display: inline-block;
  padding: 10px 20px;
  background: #f44336;
  color: white;
  text-decoration: none;
  border-radius: 4px;
}
</style>