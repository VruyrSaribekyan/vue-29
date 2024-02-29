import { saveToLocalStorage, loadFromLocalStorage } from '../../utils/localStorage';

const state = {
    tasks: loadFromLocalStorage('tasks') || [],
};

const mutations = {
    ADD_TASK(state, task) {
        state.tasks.push(task);
        saveToLocalStorage('tasks', state.tasks);
    },
    REMOVE_TASK(state, taskId) {
        state.tasks = state.tasks.filter(task => task.id !== taskId);
        saveToLocalStorage('tasks', state.tasks);
    },
    UPDATE_TASK(state, updatedTask) {
        const index = state.tasks.findIndex(task => task.id === updatedTask.id);
        if (index !== -1) {
            state.tasks.splice(index, 1, updatedTask);
            saveToLocalStorage('tasks', state.tasks);
        }
    },
};

const actions = {
    addTask({ commit }, task) {
        commit('ADD_TASK', task);
    },
    removeTask({ commit }, taskId) {
        commit('REMOVE_TASK', taskId);
    },
    updateTask({ commit }, updatedTask) {
        commit('UPDATE_TASK', updatedTask);
    },
};

export default {
    state,
    mutations,
    actions,
};
