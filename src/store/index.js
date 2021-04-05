import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks: [],
  },
  mutations: {
    createTask(state, task){
        state.tasks.push(task);
    }
  },
  actions: {
    createTask({commit}, task) {
      commit('createTask', task);
    }
  },
  modules: {

  },
  getters: {
   tasks: s => s.tasks,
   taskById: s => id => s.tasks.find(t => t.id === id),
  }
})
