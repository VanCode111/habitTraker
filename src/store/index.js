import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks: [],
    dark: false,
  },
  mutations: {
    createTask(state, task){
        state.tasks.push(task);
    },
    updateTime(state, time){
      const idx = state.tasks.findIndex(t => t.id === time.id);
      state.tasks[idx].time += time.time;
    },
    deleteTask(state, id){
      const idx = state.tasks.findIndex(t => t.id === id);
      state.tasks.splice(idx, 1);
    },
    changeDark(state, dark){
      state.dark = dark;
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
