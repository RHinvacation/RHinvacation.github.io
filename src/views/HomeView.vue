<template>
    <div>
        <RouterLink />
        <el-row>HomePage</el-row>
        <TodoList />
        <Footer />
    </div>
</template>

<script setup>
import RouterLink from '../components/RouterLink/RouterLink.vue'
import TodoList from "../components/Todo/TodoList.vue"
import Footer from '../components/Footer/Footer.vue'
</script>
