//example-1

// import { createStore } from "vuex";

// const store = createStore({
//   state() {
//     return {
//       counter: 0,
//     };
//   },
//   mutations: {
//     increment(state) {
//       state.counter++;
//     },
//   },
//   actions: {
//     increment(context) {
//       context.commit("increment");
//     },
//   },
//   getters: {
//     getCount(state) {
//       return state.counter;
//     },
//   },
// });

// export default store;

//example-2

// fix it

//example- 3

import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      todos: [],
    };
  },
  mutations: {
    addTodo: (state, todo) => {
      state.todos.unshift(todo);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    removeTodo: (state, id) => {
      state.todos.splice(id, 1);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    updateTodo: (state, { id, todo }) => {
      state.todos[id] = todo;
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    loadTodos: (state) => {
      const todos = localStorage.getItem("todos");
      if (todos) {
        state.todos = JSON.parse(todos);
      }
    },
  },
  actions: {
    loadTodos: (context) => {
      context.commit("loadTodos");
    },
  },
});

export default store;

store.dispatch("loadTodos");

