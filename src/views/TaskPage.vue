<template>
    <div class="task-page">
        <h2>Task List</h2>
        <task-form @add-task="addTask" />
        <task-list :tasks="tasks" @remove-task="removeTask" @update-task="updateTask" />
    </div>
</template>
  
<script>
import TaskForm from '../components/TaskForm.vue';
import TaskList from '../components/TaskList.vue';

export default {
    components: {
        TaskForm,
        TaskList,
    },
    computed: {
        tasks() {
            return this.$store.state.tasks.tasks;
        },
    },
    methods: {
        addTask(task) {
            this.$store.dispatch('addTask', task);
        },
        removeTask(taskId) {
            this.$store.dispatch('removeTask', taskId);
        },
        updateTask(updatedTask) {
            this.$store.dispatch('updateTask', updatedTask);
        },
    },
};
</script>
  
<style scoped>
.task-page {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
}

h2 {
    font-size: 1.8em;
    margin-bottom: 20px;
}
</style>
  