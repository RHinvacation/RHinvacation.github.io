<template>
    <el-menu :default-active="activeIndex" mode="horizontal" class="el-menu-demo" @select="handleSelect" router>
        <div class="menu-left">
            <el-menu-item index="/">
                <RouterLink to="/"><img :src="logo" alt="Logo" class="logo"></RouterLink>
            </el-menu-item>
        </div>
        <div class="menu-right">
            <el-menu-item index="/">
                <RouterLink to="/">首页</RouterLink>
            </el-menu-item>
            <el-menu-item index="/about">
                <RouterLink to="/about">关于</RouterLink>
            </el-menu-item>
            <el-menu-item index="/login">
                <RouterLink to="/login">登录</RouterLink>
            </el-menu-item>
            <el-menu-item index="/forgetpassword">
                <RouterLink to="/forgetpassword">忘记密码</RouterLink>
            </el-menu-item>
        </div>
    </el-menu>
</template>
  
<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const logo = '../public/Logo/gdip.png'
const activeIndex = ref('/') // 默认活跃项设置为根路径

const handleSelect = (key, keyPath) => {
    console.log(`Selected key: ${key}`, keyPath)
}

// 获取当前路径，并设置为活跃菜单项
const route = useRoute()
activeIndex.value = route.path
</script>
  
<style>
.el-menu-demo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #ffffff;
    border-bottom: 1px solid #ebeef5;
    padding: 0 20px;
}

.menu-left {
    display: flex;
    align-items: center;
}

.menu-right {
    display: flex;
    align-items: center;
}

.logo {
    height: 40px;
    padding: 10px 0;
}
</style>
  