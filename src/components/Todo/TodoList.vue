<template>
    <div>
        <TodoInput />
        <div v-if="todos.length === 0">
            <el-empty description="Empty" />
        </div>
        <div v-else>
            <TodoItems />
            <TodoFooter />
        </div>
    </div>
</template>

<script setup>
import TodoInput from './TodoComps/TodoInput.vue';
import TodoItems from './TodoComps/TodoItems.vue';
import TodoFooter from './TodoComps/TodoFooter.vue';
import { useTodos } from '../../js/useTodos.js'
const { todos } = useTodos();
</script>
