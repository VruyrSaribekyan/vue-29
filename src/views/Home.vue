<template>
    <div class="home">
        <h1>Добро пожаловать в диспетчер задач</h1>
        <router-link to="/tasks">Перейти на страницу задач</router-link>
    </div>
</template>
  
<style scoped>
.home {
    text-align: center;
    padding: 20px;
}

h1 {
    font-size: 2em;
    margin-bottom: 20px;
}

router-link {
    font-size: 1.2em;
    color: #3498db;
    text-decoration: none;
    cursor: pointer;
}

router-link:hover {
    text-decoration: underline;
}
</style>
  
<script>
export default {
    name: 'HomePage',
};
</script>
  