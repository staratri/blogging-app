<template>
  <div id="app">
    <!-- <add-blog></add-blog> -->
    <!-- <show-blogs></show-blogs> -->
    <nav-bar></nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import addBlog from './components/addBlog.vue'
import showBlogs from './components/showBlogs.vue'

export default {
  components : {
    'add-blog' : addBlog,
    'show-blogs' : showBlogs
  }
}
</script>

<style>
  * {
    font-family: 'Slabo 27px', serif;
  }
  a {
    text-decoration: none;
  }
</style>
