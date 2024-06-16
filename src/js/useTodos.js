import { ref } from 'vue'
import { formatTime } from './timeUtils.js'

const todos = ref([])

export function useTodos() {
    const addTodo = (text, startingtime, deadline) => {
        const formattedStartingTime = formatTime(startingtime)
        const formattedDeadline = formatTime(deadline)

        todos.value.push({
            id: Date.now(),
            text,
            done: false,
            selected: false,
            startingtime: formattedStartingTime,
            deadline: formattedDeadline
        })
    }

    const removeTodo = (id) => {
        const index = todos.value.findIndex(todo => todo.id === id)
        if (index !== -1) {
            todos.value.splice(index, 1)
        }
    }

    return {
        todos,
        addTodo,
        removeTodo
    }
}
