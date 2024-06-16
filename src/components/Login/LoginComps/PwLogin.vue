<template>
    <div class="pw-login-container">
        <el-form ref="formRef" :rules="rules" :model="form" @keydown.enter="handleLogin" class="pw-login-form" label-position="top">
            <el-form-item prop="account">
                <el-input v-model="form.account" placeholder="请输入帐户" clearable>
                    <template #prefix>
                        <el-icon>
                            <user />
                        </el-icon>
                    </template>
                </el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input v-model="form.password" type="password" placeholder="请输入密码" show-password>
                    <template #prefix>
                        <el-icon>
                            <lock />
                        </el-icon>
                    </template>
                </el-input>
            </el-form-item>
            <el-form-item>
                <el-button :plain="true" type="primary" @click="handleLogin" :loading="loading">登录</el-button>
            </el-form-item>
            <div class="pw-edit">
                <el-checkbox v-model="rememberMe" label="记住密码" size="large" />
                <router-link to="/forgetpassword">忘记密码</router-link>
            </div>
        </el-form>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { User, Lock } from '@element-plus/icons-vue' // 导入图标
import { ElMessage } from 'element-plus'

const account = ref('')
const password = ref('')
const rememberMe = ref(false)

const form = reactive({
    account: "",
    password: ""
})

const rules = {
    account: [
        { required: true, message: "用户名不能为空", trigger: "blur" },
        { min: 3, max: 10, message: "用户名长度在 3 到 10 个字符", trigger: "blur" }
    ],
    password: [
        { required: true, message: "密码不能为空", trigger: "blur" },
        { min: 3, max: 10, message: "密码长度在 3 到 10 个字符", trigger: "blur" }
    ]
}

const formRef = ref(null)
const loading = ref(false)

const login = (account, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (account === 'admin' && password === '123456') {
                resolve({ success: true })
            } else {
                reject(new Error('Invalid account or password'))
            }
        }, 1000)
    })
}

const handleLogin = () => {
    formRef.value.validate(valid => {
        if (!valid) return
        loading.value = true
        // 登录逻辑
        login(form.account, form.password).then(res => {
            ElMessage({
                message: '登录成功，正在跳转...',
                type: 'success',
            })
            setTimeout(() => {
                window.location.href = '/about'
            }, 1000)
            // alert('account：' + form.account + '\n' + 'password：' + form.password)
            // console.log('account', form.account)
            // console.log('password', form.password)
        }).finally(() => {
            loading.value = false
        }).catch(err => {
            ElMessage({
                message: '请输入帐户和密码',
                type: 'error',
            })
        })

    })

}
</script>

<style scoped>
.pw-login-container {
    width: 100%;
    max-width: 400px;
}

.pw-login-form {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
}

.pw-edit {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.el-input,
.el-button {
    width: 100%;
}

a {
    color: #409eff;
    font-size: 14px;
}

a:hover {
    color: #66b1ff;
    text-decoration: underline;
}
</style>
