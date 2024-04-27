<script setup>
import { ref, onMounted } from 'vue';

const tasks = ref(
    JSON.parse(localStorage.getItem('tasks')) || [
        { title: 'Task 1', done: false },
        { title: 'Task 2', done: false },
        { title: 'Task 3', done: false },
    ]
);
const newTask = ref('');

const addTask = () => {
    if (newTask.value.trim() !== '') {
        tasks.value.push({ title: newTask.value, done: false });
        saveTasksToLocalStorage();
        newTask.value = '';
    }
};

const removeTask = (index) => {
    tasks.value.splice(index, 1);
    saveTasksToLocalStorage();
};

const saveTasksToLocalStorage = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks.value));
};

onMounted(() => {
    if (!localStorage.getItem('tasks')) {
        saveTasksToLocalStorage();
    }
});

</script>

<template>
    <div>
        <h1>Todo List</h1>
        <input v-model="newTask" @keyup.enter="addTask" placeholder="Add new task" />
        <ul>
            <li v-for="(task, index) in tasks" :key="index">
                <input type="checkbox" v-model="task.done" @change="saveTasksToLocalStorage" />
                <span :class="{ 'done': task.done }">{{ task.title }}</span>
                <button @click="removeTask(index)">Remove</button>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.done {
    text-decoration: line-through;
}
</style>