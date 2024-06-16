<template>
    <div class="carousel-container">
        <el-carousel height="100vh" autoplay direction="vertical" :interval="3000">
            <el-carousel-item v-for="(item, index) in banners" :key="index">
                <img :src="item" alt="轮播图">
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
import { ref } from 'vue'
import 'element-plus/dist/index.css'

export default {
    name: 'CarouselComponent',
    setup() {
        const banners = ref([
            '../LoginView/banner/bg1.jpg',
            '../LoginView/banner/bg2.jpg',
            '../LoginView/banner/bg3.jpg',
            '../LoginView/banner/bg4.jpg',
            '../LoginView/banner/bg5.jpg'
        ])
        return {
            banners
        }
    }
}
</script>

<style scoped>
.carousel-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>
