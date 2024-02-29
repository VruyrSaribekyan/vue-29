<template>
    <div class="task-form">
        <h3>Добавить новую задачу</h3>
        <form @submit.prevent="submitForm">
            <label for="title">Заголовок</label>
            <input v-model="task.title" type="text" id="title" required />

            <label for="description">Описание</label>
            <textarea v-model="task.description" id="description" required></textarea>

            <button type="submit">Добавить задачу</button>
        </form>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            task: {
                title: '',
                description: '',
            },
        };
    },
    methods: {
        submitForm() {
            if (this.task.title && this.task.description) {
                this.$emit('add-task', { ...this.task, id: Date.now() });
                this.task = { title: '', description: '' };
            }
        },
    },
};
</script>
  
<style scoped>
.task-form {
    margin-bottom: 20px;
}

h3 {
    font-size: 1.5em;
    margin-bottom: 10px;
}

form {
    display: flex;
    flex-direction: column;
}

label {
    margin-bottom: 5px;
}

input,
textarea {
    margin-bottom: 10px;
    padding: 8px;
}

button {
    background-color: #3498db;
    color: #fff;
    padding: 10px;
    cursor: pointer;
    border: none;
}

button:hover {
    background-color: #2980b9;
}
</style>
  