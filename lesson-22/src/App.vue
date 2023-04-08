//example-1

<!-- <template>
  <div>
    <p>{{ count }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<script>
export default {
  name: "App",
  computed: {
    count() {
      return this.$store.getters.getCount;
    },
  },
  methods: {
    increment() {
      this.$store.dispatch("increment");
    },
  },
};
</script>

<style scoped></style> -->

//example-2
<!-- <template>
  <div>
    <h1>{{ counter }}</h1>
    <button @click="incrementCounter">+</button>
    <button @click="decrementCounter">-</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    incrementCounter() {
      this.counter++;
      localStorage.setItem("counter", this.counter);
    },
    decrementCounter() {
      this.counter--;
      localStorage.setItem("counter", this.counter);
    },
  },
  computed: {
    message() {
      return `Hello counter ${this.counter}`;
    },
  },
  mounted() {
    const savedCounter = localStorage.getItem("counter");

    if (savedCounter !== null) {
      this.counter = parseInt(savedCounter);
    }
  },
};
</script>

<style scoped></style> -->

//example-3
<template>
  <div>
    <h1>ToDo</h1>
    <form @submit.prevent="addTodo">
      <input type="text" v-model="newTodoText" placeholder="Enter todo text" required />
      <button>Add todo</button>
    </form>
    <transition-group tag="ul" name="slide">
      <li v-for="(todo, index) in todos" :key="todo.id">
        <div v-if="index === editingIndex">
          <form @submit.prevent="saveEdit(index)">
            <input type="text" v-model="todo.text" required />
            <button type="submit">Save</button>
            <button type="button" @click="cancelEdit">Cancel</button>
          </form>
        </div>
        <div v-else>
          <input type="checkbox" v-model="todo.done" />
          {{ todo.text }}
          <button @click="startEdit(index)">edit</button>
          <button @click="removeTodo(index)">X</button>
        </div>
      </li>
    </transition-group>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      newTodoText: "",
      editingIndex: -1,
    };
  },
  computed: {
    todos() {
      return this.$store.state.todos;
    },
  },
  methods: {
    addTodo() {
      if (this.newTodoText.trim() === "") {
        return;
      }
      const newTodo = {
        id: new Date().getTime(),
        text: this.newTodoText,
        done: false,
      };
      this.$store.commit("addTodo", newTodo);
      this.newTodoText = "";
    },
    removeTodo(index) {
      this.$store.commit("removeTodo", index);
    },
    startEdit(index) {
      this.editingIndex = index;
    },
    saveEdit(index) {
      const todo = this.todos[index];
      if (todo.text.trim() === "") {
        return;
      }
      this.$store.commit("updateTodo", { index, todo });
      this.editingIndex = -1;
    },
    cancelEdit() {
      this.editingIndex = -1;
    },
  },
  mounted() {
    this.$store.dispatch("loadTodos");
  },
};
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.5s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
}

li {
  transition: all .3s ease;
}

</style>