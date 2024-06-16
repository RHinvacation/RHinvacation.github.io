<template>
    <div class="login-view">
        <LoginBackground />
        <div class="login-content">
            <div class="left-slider">
                <LoginSlider />
            </div>
            <div class="right-slider">
                <LoginList />
            </div>
        </div>
        <div class="copyright">
            <p style="align-items: center;color:#ffffff">Copyright © {{ Copyright.year }} {{ Copyright.name }} All Rights Reserved</p>
        </div>
    </div>
</template>
<script setup>
import LoginBackground from '../components/Login/LoginBackground.vue'
import LoginList from '../components/Login/LoginList.vue'
import LoginSlider from '../components/Login/LoginSlider.vue'
const Copyright = { year: '2024', name: 'Logo' }
</script>
<style scoped>
.login-view {
    position: relative;
    z-index: 0;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
.login-content {
    position: relative;
    z-index: 1;
    display: flex;
    width: 50%; /* 调整宽度 */
    height: 56%; /* 调整高度 */
    background: rgba(0, 0, 0, 0.5);
    border-radius: 20px;
    overflow: hidden;
}
.left-slider {
    flex: 4; /* 调整左侧比例 */
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
}
.right-slider {
    flex: 3; /* 调整右侧比例 */
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.8);
    padding: 40px;
}
.copyright {
    height: auto;
    position: absolute;
    bottom: 40px;
    margin: 0;
    width: 100%;
    left: 0;
}
.copyright p {
    text-align: center;
    font-size: 14px;
    letter-spacing: 1px;
}
</style>
