import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks: [],
  },
  mutations: {
    createTask(state, task){
        state.tasks.push(task);
    },
    updateTime(state, time){
      const idx = state.tasks.findIndex(t => t.id === time.id);
      state.tasks[idx].hours = time.hours;
      state.tasks[idx].minutes = time.minutes;
      state.tasks[idx].seconds = time.seconds;
    },
    deleteTask(state, id){
      const idx = state.tasks.findIndex(t => t.id === id);
      state.tasks.splice(idx, 1);
    }
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
    }
  },
  modules: {

  },
  getters: {
   tasks: s => s.tasks,
   taskById: s => id => s.tasks.find(t => t.id === id),
  }
})
