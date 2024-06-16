<template>
    <div class="login-list">
        <h3>统一身份认证登录</h3>
        <div class="login-methods">
            <router-link to="/login/PwLogin" class="login-link" :class="{ active: isActive('/login/PwLogin') }">
                <span>帐户密码登录</span>
            </router-link>
            <router-link to="/login/QrLogin" class="login-link" :class="{ active: isActive('/login/QrLogin') }">
                <span>二维码登录</span>
            </router-link>
        </div>
        <router-view />
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const isActive = (path) => {
    return route.path === path
}
</script>

<style scoped>
.login-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: black;
    width: 100%; /* 调整宽度 */
    max-width: 400px; /* 设置最大宽度 */
    margin: 0 auto; /* 居中对齐 */
    padding: 20px; /* 增加内边距 */
    background: rgba(255, 255, 255, 0.9); /* 背景颜色和透明度 */
    border-radius: 10px; /* 添加圆角 */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 添加阴影 */
}
h3 {
    margin-bottom: 20px;
    font-size: 24px;
    text-align: center; /* 居中对齐 */
}
.login-methods {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    width: 100%;
}
.login-link {
    flex: 1;
    text-decoration: none;
    color: black;
    font-weight: bold;
    text-align: center;
    padding: 10px 0;
}
.login-link:hover {
    color: #007bff;
}
.login-link.active {
    color: rgb(0, 0, 0); /* 当前选中的登录方式的颜色 */
    border-bottom: 2px solid #007bff;
}
.login-link.active:hover{
    cursor: default;
}
</style>
