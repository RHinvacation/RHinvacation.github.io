<template>
    <div>
        <div>
            <el-text class="mx-1">进行中：</el-text>
            <el-text class="mx-1" type="warning">{{ uncompletedCount }}</el-text>&nbsp;
            <el-text class="mx-1">已完成：</el-text>
            <el-text class="mx-1" type="success">{{ completedCount }}</el-text>&nbsp;
            <el-text class="mx-1">全部任务：</el-text>
            <el-text class="mx-1" type="primary">{{ totalCount }}</el-text>
        </div>
        <div class="flex-container">
            <span class="text-section">
                <el-text class="mx-1" type="info">已选中：</el-text>
                <el-text class="mx-1" type="danger">{{ selectedCount }}</el-text>
            </span>
            <span class="button-section">
                <el-button type="danger" round @click="clearSelected">清空已选中任务</el-button>
                <el-button type="danger" round @click="clearCompleted">清除已完成事件</el-button>
                <el-button type="danger" round @click="clearUncompleted">清除进行中事件</el-button>
            </span>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useTodos } from '../../../js/useTodos.js'

const { todos, removeTodo } = useTodos()

const completedCount = computed(() => todos.value.filter(todo => todo.done).length)
const uncompletedCount = computed(() => todos.value.filter(todo => !todo.done).length)
const totalCount = computed(() => todos.value.length)
const selectedCount = computed(() => todos.value.filter(todo => todo.selected).length)

const clearSelected = () => {
    todos.value = todos.value.filter(todo => !todo.selected)
}

const clearCompleted = () => {
    todos.value = todos.value.filter(todo => !todo.done)
}

const clearUncompleted = () => {
    todos.value = todos.value.filter(todo => todo.done)
}
</script>

<style scoped>
.flex-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.text-section {
    flex-grow: 1;
    display: flex;
    align-items: center;
}

.button-section {
    display: flex;
    gap: 10px;
}
</style>