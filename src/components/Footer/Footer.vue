<template>
    <div class="footer">
        <div class="footer-left" ><RouterLink to="/"><img :src="footerList.webLogo" alt="Logo"></RouterLink></div>
        <div class="footer-right">
            <div class="footer-right-top">
                <div class="footer-link">
                    <div v-for="(footerLinkItem, index) in footerList.footerLink" :key="index">
                        <a :href="footerLinkItem.url">{{ footerLinkItem.name }}</a>
                        <span v-if="index < footerList.footerLink.length - 1">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                    </div>
                </div>
                <div class="email">{{ footerList.email }}</div>
                <div class="copyright">{{ footerList.copyright_zh }}</div>
                <div class="copyright">{{ footerList.copyright_EN }}</div>
            </div>
            <hr />
            <div class="media-list">
                <div v-for="(mediaItem, index) in footerList.MediaList" :key="index">
                    <a :href="mediaItem.url">{{ mediaItem.media }}</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
let footerList = {
    webLogo: '../Logo/logo.png',
    copyright_zh: '版权所有©2024 Logo 备案号',
    copyright_EN: 'Copyright © 2024 Logo. All Rights Reserved',
    email: '邮箱：Logo@gmail.com',
    footerLink: [
        { name: '关于我们', url: '/about' },
        { name: '友情链接', url: 'javascript:alert("友情链接")' },
        { name: 'Github', url: 'https://github.com/RHinvacation?tab=repositories' },
        { name: '加入我们', url: 'javascript:alert("加入我们")' }
    ],
    MediaList: [
        { media: '公众号', url: 'javascript:alert("公众号")' },
        { media: '小程序', url: 'javascript:alert("小程序")' },
        { media: '微博', url: 'javascript:alert("微博")' },
        { media: 'Bilibili', url: 'https://space.bilibili.com/1451751902' },
        { media: '知乎', url: 'javascript:alert("知乎")' },
        { media: '抖音', url: 'javascript:alert("抖音")' }
    ]
}
</script>

<style scoped>
a{
    color: #ffffff;
}
.footer {
    background-color: blue;
    color: white;
    padding: 50px 0;
    display: flex;
}

.footer a:hover {
    color: #00ffd5;
}

.footer-left {
    display: flex;
    justify-content: center;
    align-items: center;
    float: left;
    width: 45%;
}

.footer-right {
    float: right;
    width: 50%;
}

.footer-right-top {
    margin-bottom: 30px;
}

.footer-link,
.email,
.copyright {
    margin-bottom: 10px;
}

.footer-link,
.media-list {
    display: flex;
    align-items: center;
}

.media-list {
    margin: 20px 50px;
    justify-content: space-between;
    flex-wrap: wrap;
}

/* 在小屏幕下将footer-right类挪到footer-left类的下方 */
@media screen and (max-width: 840px) {
    .footer {
        flex-direction: column;
    }

    .footer-left,
    .footer-right {
        padding: 25px 0;
        width: 100%;
    }
}

@media (min-width:433px) and (max-width:840px) {
    .footer-right-top {
        margin: 30px 50px;
    }

    .footer-right hr {
        margin: 0 auto;
        width: 90%;
    }
}

@media screen and (max-width:433px) {
    .footer-right-top {
        margin: 30px;
    }

    .footer-right hr {
        margin: 0 auto;
        width: 90%;
    }
}
</style>