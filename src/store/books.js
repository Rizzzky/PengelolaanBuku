import { ref } from 'vue'

export const books = ref([
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
  { id: 2, title: '1984', author: 'George Orwell', year: 1949 }
])

export function addBook(book) {
  const newId = books.value.length > 0 ? Math.max(...books.value.map(b => b.id)) + 1 : 1
  books.value.push({ ...book, id: newId })
}

export function updateBook(id, updatedBook) {
  const index = books.value.findIndex(book => book.id === parseInt(id))
  if (index !== -1) {
    books.value[index] = { ...updatedBook, id: parseInt(id) }
  }
}

export function getBook(id) {
  return books.value.find(book => book.id === parseInt(id))
}