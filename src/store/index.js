import { createStore } from 'vuex';
import tasksModule from './modules/tasks';

const store = createStore({
    modules: {
        tasks: tasksModule,
    },
});

export default store;
