import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AddBook from '../views/AddBook.vue'
import BookDetail from '../views/BookDetail.vue'
import EditBook from '../views/EditBook.vue'
import DeleteBook from '../views/DeleteBook.vue'
import BooksList from '../views/BooksList.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/books',
    name: 'BooksList',
    component: BooksList
  },
  {
    path: '/add',
    name: 'AddBook',
    component: AddBook
  },
  {
    path: '/book/:id',
    name: 'BookDetail',
    component: BookDetail
  },
  {
    path: '/edit/:id',
    name: 'EditBook',
    component: EditBook
  },
  {
    path: '/delete',
    name: 'DeleteBook',
    component: DeleteBook
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router