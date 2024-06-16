<template>
    <div>
        <el-row>
            <el-col :span="2">
                <el-checkbox v-model="selectAll" @change="toggleSelectAll" label="全选" />
            </el-col>
            <el-col :span="2"><el-text>序号</el-text></el-col>
            <el-col :span="7"><el-text>待办事项</el-text></el-col>
            <el-col :span="2"><el-text>开始时间</el-text></el-col>
            <el-col :span="2"><el-text>截止时间</el-text></el-col>
            <el-col :span="2"><el-text>完成状态</el-text></el-col>
            <el-col :span="4"><el-text>操作</el-text></el-col>
        </el-row>
        <el-row v-for="(item, index) in todos" :key="item.id">
            <el-col :span="2">
                <el-checkbox v-model="item.selected" @change="updateSelectAll" />
            </el-col>
            <el-col :span="2">{{ index + 1 }}</el-col>
            <el-col :span="7">{{ item.text }}</el-col>
            <el-col :span="2">{{ item.startingtime }}</el-col>
            <el-col :span="2">{{ item.deadline }}</el-col>
            <el-col :span="2">{{ item.done ? '已完成' : '进行中' }}</el-col>
            <el-col :span="4">
                <el-button type="primary" :icon="Edit" circle @click="editItem(item)" />
                <el-button type="danger" :icon="Delete" circle @click="deleteItem(item.id)" />
            </el-col>
        </el-row>
        <!-- 编辑对话框 -->
        <el-dialog v-model="isDialogVisible" title="编辑待办事项">
            <el-form :model="currentItem">
                <el-form-item label="待办事项">
                    <el-input v-model="currentItem.text" clearable :prefix-icon="Edit" placeholder="编辑待办事项"></el-input>
                </el-form-item>
                <el-form-item label="完成状态">
                    <el-switch v-model="currentItem.done"></el-switch>&nbsp;&nbsp;
                    <el-text :type="currentItem.done ? 'success' : 'danger'">
                        {{ currentItem.done ? '已完成' : '进行中' }}
                    </el-text>
                </el-form-item>
                <el-form-item label="开始时间">
                    <el-date-picker v-model="currentItem.startingtime" type="datetime"
                        placeholder="请选择开始时间"></el-date-picker>
                </el-form-item>
                <el-form-item label="截止时间">
                    <el-date-picker v-model="currentItem.deadline" type="datetime" placeholder="请选择截止时间"></el-date-picker>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="isDialogVisible = false">取消</el-button>
                <el-button type="primary" @click="saveItem">保存</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useTodos } from '../../../js/useTodos.js'
import { Edit, Delete } from '@element-plus/icons-vue'
import { formatTime } from '../../../js/timeUtils.js'

const { todos, removeTodo } = useTodos()

const selectAll = ref(false)
const isDialogVisible = ref(false)
const currentItem = ref({})

// 计算属性用于动态判断是否全选
const allSelected = computed(() => todos.value.length > 0 && todos.value.every(todo => todo.selected))

// 监听allSelected变化，同步更新selectAll的值
watch(allSelected, (newVal) => {
    selectAll.value = newVal
})

const toggleSelectAll = () => {
    todos.value.forEach(todo => {
        todo.selected = selectAll.value
    })
}

const updateSelectAll = () => {
    selectAll.value = allSelected.value
}

const editItem = (item) => {
    currentItem.value = { ...item }
    isDialogVisible.value = true
}

const saveItem = () => {
    let emptyCount = 0
    let errorMessage = ''
    // 检查待办事项文本、开始时间和截止时间是否为空，并计算空值的数量
    if (!currentItem.value.text) {
        errorMessage += '待办事项'
        emptyCount++
    }
    if (!currentItem.value.startingtime) {
        errorMessage += `${emptyCount > 0 ? '、' : ''}开始时间`
        emptyCount++
    }
    if (!currentItem.value.deadline) {
        errorMessage += `${emptyCount > 0 ? '、' : ''}截止时间`
        emptyCount++
    }
    // 根据空值的数量构建错误消息
    if (emptyCount > 0) {
        errorMessage += '不能为空，请重新输入'
    }
    // 如果有错误消息，则弹出提示框
    if (errorMessage) {
        return alert(errorMessage)
    }
    // 检查截止时间是否晚于开始时间
    if (new Date(currentItem.value.deadline) <= new Date(currentItem.value.startingtime)) {
        return alert("截止时间不能早于开始时间，请重新设置")
    }

    const index = todos.value.findIndex(todo => todo.id === currentItem.value.id)
    if (index !== -1) {
        // 格式化开始时间和截止时间
        currentItem.value.startingtime = formatTime(currentItem.value.startingtime)
        currentItem.value.deadline = formatTime(currentItem.value.deadline)

        todos.value[index] = { ...currentItem.value }
    }
    isDialogVisible.value = false
}

const deleteItem = (id) => {
    removeTodo(id)
}

</script>
