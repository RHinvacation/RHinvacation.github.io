<template>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false" @select="handleSelect">
        <el-menu-item>
            <RouterLink to="/"><img :src="logo" alt="Logo" /></RouterLink>
        </el-menu-item>
        <div class="flex-grow"></div>
        <el-menu-item index="1">
            <RouterLink to="/">Home</RouterLink>
        </el-menu-item>
        <el-menu-item index="2">
            <RouterLink to="/about">About</RouterLink>
        </el-menu-item>
        <el-menu-item index="3">
            <RouterLink to="/login">Login</RouterLink>
        </el-menu-item>
        <el-menu-item index="4">
            <RouterLink to="/forgetpassword">Forget Password</RouterLink>
        </el-menu-item>
        <el-sub-menu index="5">
            <template #title>Workspace</template>
            <el-menu-item index="5-1">Item One</el-menu-item>
            <el-menu-item index="5-2">Item Two</el-menu-item>
            <el-menu-item index="5-3">Item Three</el-menu-item>
            <el-sub-menu index="5-4">
                <template #title>Item Four</template>
                <el-menu-item index="5-4-1">Item One</el-menu-item>
                <el-menu-item index="5-4-2">Item Two</el-menu-item>
                <el-menu-item index="5-4-3">Item Three</el-menu-item>
            </el-sub-menu>
        </el-sub-menu>
    </el-menu>
</template>
    
<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const logo = '../Logo/pku.png'
const route = useRoute()
const activeIndex = ref(getActiveIndex(route))

function getActiveIndex(route) {
    switch (route.path) {
        case '/':
            return '1'
        case '/about':
            return '2'
        case '/login':
            return '3'
        case '/forgetpassword':
            return '4'
        default:
            return '1'
    }
}

const handleSelect = (key, keyPath) => {
    console.log(key, keyPath)
}
</script>
    
<style scoped>
.flex-grow {
    flex-grow: 1;
}

/* 优化菜单样式 */
.el-menu-demo {
    line-height: 64px;
    /* 调整菜单项的行高，确保与图片高度适配 */
}

.el-menu-demo .el-menu-item {
    padding: 0 20px;
    /* 调整菜单项的内边距 */
}

.el-menu-demo img {
    height: 32px;
    vertical-align: middle;
    /* 垂直居中图片 */
}

/* 响应式优化，当菜单宽度较小时，保持菜单项的布局美观 */
@media (max-width: 768px) {
    .el-menu-demo .el-menu-item {
        padding: 0 10px;
        /* 在小屏幕上减少内边距 */
    }
}
</style>
    