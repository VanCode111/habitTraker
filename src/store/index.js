import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks: JSON.parse(localStorage.getItem('tasks') || '[]'),
    dark: JSON.parse(localStorage.getItem('dark')) || false,
  },
  mutations: {
    createTask(state, task){
        state.tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    updateTime(state, time){
      const idx = state.tasks.findIndex(t => t.id === time.id);
      state.tasks[idx].time += time.time;
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    deleteTask(state, id){
      const idx = state.tasks.findIndex(t => t.id === id);
      state.tasks.splice(idx, 1);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    changeDark(state, dark){
      state.dark = dark;
      localStorage.setItem('dark', JSON.stringify(state.dark));
      console.log(localStorage.getItem('dark'));
    },
  },
  actions: {
    createTask({commit}, task) {
      commit('createTask', task);
    },
    updateTime({commit}, time) {
      commit('updateTime', time);
    },
    deleteTask({commit}, id){
      commit('deleteTask', id);
    },
    changeDark({commit}, dark){
      commit('changeDark', dark);
    },
  },
  modules: {

  },
  getters: {
   tasks: s => s.tasks,
   dark: s => s.dark,
   taskById: s => id => s.tasks.find(t => t.id === id),
  }
})
