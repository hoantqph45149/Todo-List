import Storage from "./utils/Storage.js";

const init = {
  todos: Storage.get(),
  filter: "all",
  filters: {
    all: () => true,
    active: (todo) => !todo.completed,
    completed: (todo) => todo.completed,
  },
  editing: null,
};

const acctions = {
  addTodo(state, title) {
    state.todos.push({ title, completed: false });
    Storage.set(state.todos);
  },
  toggleTodo(state, index) {
    state.todos[index].completed = !state.todos[index].completed;
    Storage.set(state.todos);
  },
  toggleAll(state, completed) {
    state.todos.forEach((todo) => {
      todo.completed = completed;
    });
    Storage.set(state.todos);
  },
  deleteTodo(state, index) {
    state.todos.splice(index, 1);
    Storage.set(state.todos);
  },
  changeFilter(state, filter) {
    state.filter = filter;
  },
  clearCompleted(state) {
    state.todos = state.todos.filter(state.filters.active);
    Storage.set(state.todos);
  },
  startEditing(state, index) {
    state.editing = index;
  },
  editTodo(state, title) {
    if (title) {
      state.todos[state.editing].title = title;
      state.editing = null;
      Storage.set(state.todos);
    } else {
      this.deleteTodo(state, state.editing);
    }
  },
  cancelEditing(state) {
    state.editing = null;
  },
};

export default function reducer(state = init, action, ...args) {
  acctions[action] && acctions[action](state, ...args);
  return state;
}
