<template>
    <div>        
        <nav>
            <RouterLink to="/"><img :src="logo" alt="Logo"></RouterLink>
            <RouterLink to="/">Home</RouterLink> |
            <RouterLink to="/about">About</RouterLink> |
            <RouterLink to="/login">Login</RouterLink>
        </nav>
    </div>
</template>
<script setup>
const logo = '../public/Logo/logo.png'
</script>
<style scoped>

</style>