<template>
    <div class="task-list">
        <h3>Список заданий</h3>
        <ul>
            <li v-for="task in tasks" :key="task.id">
                <div v-if="!task.editing" class="task-details">
                    <div class="task-inner">
                        <span>{{ task.title }}</span>
                        <span>{{ task.description }}</span>
                    </div>
                    <div>
                        <button @click="editTask(task)">Редактировать</button>
                        <button @click="removeTask(task.id)">Удалить</button>
                    </div>
                </div>
                <div v-else>
                    <input v-model="task.title" type="text" />
                    <textarea v-model="task.description"></textarea>
                    <button @click="updateTask(task)">Сохранить</button>
                    <button @click="cancelEdit(task)">Отмена</button>
                </div>
            </li>
        </ul>
    </div>
</template>
  
<script>
export default {
    props: {
        tasks: Array,
    },
    methods: {
        editTask(task) {
            task.editing = true;
        },
        updateTask(task) {
            task.editing = false;
            this.$emit('update-task', task);
        },
        cancelEdit(task) {
            task.editing = false;
        },
        removeTask(taskId) {
            if (confirm('Вы уверены, что хотите удалить эту задачу?')) {
                this.$emit('remove-task', taskId);
            }
        },
    },
};
</script>
  
<style scoped>
.task-list {
    max-width: 600px;

}

h3 {
    font-size: 1.5em;
    margin-bottom: 10px;
}

ul {
    list-style: none;
    padding: 0;

}

li {
    border: 1px solid #ddd;
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 10px;
    display: flex;
    justify-content: space-between;

}

.task-details {
    flex: 3;
    display: flex;
    justify-content: space-between;
}

.task-inner {
    display: flex;
    flex-direction: column;
}

button {
    background-color: #e74c3c;
    color: #fff;
    padding: 5px 10px;
    cursor: pointer;
    border: none;
    margin-left: 5px;
}

button:hover {
    background-color: #c0392b;
}

input,
textarea {
    width: 100%;
    margin-bottom: 5px;
}
</style>
  