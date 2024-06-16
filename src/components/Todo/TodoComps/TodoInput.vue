<template>
    <div>
        <el-input v-model="input" style="width: 40%" placeholder="请添加备忘录" clearable :prefix-icon="Edit" />&nbsp;
        <el-date-picker v-model="startingtime" type="datetime" placeholder="开始时间"></el-date-picker>&nbsp;
        <el-date-picker v-model="deadline" type="datetime" placeholder="截止时间"></el-date-picker>&nbsp;
        <el-button :icon="Check" circle @click="addTodoItem" />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { Edit, Check } from '@element-plus/icons-vue'
import { useTodos } from '../../../js/useTodos.js'

const input = ref('')
const startingtime = ref('')
const deadline = ref('')
const { addTodo } = useTodos()

const addTodoItem = () => {
    // 如果开始时间为空，设置为当前时间
    if (!startingtime.value) {
        startingtime.value = new Date().toISOString()
    }
    // 如果截止时间为空，设置为开始时间加上一周的时间间隔
    if (!deadline.value) {
        const oneWeekLater = new Date(new Date(startingtime.value).getTime() + 7 * 24 * 60 * 60 * 1000)
        deadline.value = oneWeekLater.toISOString()
    }
    // 检查截止时间是否晚于开始时间
    if (new Date(deadline.value) <= new Date(startingtime.value)) {
        return alert("截止时间不能早于开始时间，请重新设置")
    }

    if (input.value.trim() !== '' && startingtime.value !== '' && deadline.value !== '') {
        addTodo(input.value, startingtime.value, deadline.value)
        input.value = '',
            startingtime.value = '',
            deadline.value = ''
    } else {
        alert("备忘录内容不能为空，请填写完整后再提交")
    }
}
</script>
