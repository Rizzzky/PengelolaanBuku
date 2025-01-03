<template>
  <div class="not-found">
    <h2>404 - Page Not Found</h2>
    <p>The page you are looking for does not exist.</p>
    <router-link to="/" class="home-button">Go to Home</router-link>
  </div>
</template>

<style scoped>
.not-found {
  text-align: center;
  padding: 50px;
}

.home-button {
  display: inline-block;
  padding: 10px 20px;
  background: #2196F3;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  margin-top: 20px;
}
</style>