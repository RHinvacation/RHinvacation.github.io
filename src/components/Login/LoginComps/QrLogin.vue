<template>
    <div class="qrlogin">
        <img :src="qrcode" alt="二维码登录" class="qrcode-img">
        <p>{{ qrLoginText }}</p>
    </div>
</template>

<script setup>
const qrcode = '../LoginView/qrlogin/qrcode.png'
const qrLoginText = '扫描二维码登录'
</script>

<style scoped>
.qrlogin {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 400px;  
}
.qrcode-img {
    width: 100%;
    max-width: 160px; /* 设置最大宽度 */
    height: auto;
}
.qrlogin p{
    color: #36d;
    font-size: 15px;
    font-weight: 800;
    letter-spacing: 1px;
}
</style>
