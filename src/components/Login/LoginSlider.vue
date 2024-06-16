<template>
    <div class="slider-container">
        <div class="overlay">
            <img :src="logo" alt="Logo图片" class="logo">
            <div class="slider-text" v-for="(sliderText, index) in sliderText" :key="index">
                <h2>{{ sliderText.title }}</h2>
                <p v-for="(content, index) in sliderText.content" :key="index">{{ content.content }}</p>
            </div>
        </div>
    </div>
</template>
<script setup>
const logo = '../Logo/logo.png'
const sliderText = [
    {
        title: '有爱, 有梦想, 有向往的方向',
        content: [{id:'1',content:'去拼搏, 去创造, 敢为人先, 追求卓越'},{id:'2',content:'我们邀请您加入我们的圈子'}]
    }
]
</script>
<style scoped>
.slider-container {
    position: relative;
    width: 100%;
    height: 100%;
    background-image: url('../LoginView/slider/slider-bg.jpg');
    background-size: cover;
    background-position: center;
}
.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    text-align: center;
}
.logo {
    width: 180px;
    padding-left: 30px;
    padding-right: 30px;
    margin-bottom: 20px;
}
.slider-text {
    max-width: 400px;
    padding-left: 30px;
    padding-right: 30px;
}
h2 {
    font-size: 25px;
    margin-bottom: 20px;
    text-align: left;
}
p {
    font-size: 14px;
    margin: 5px 0;
    text-align: left;
}
</style>
