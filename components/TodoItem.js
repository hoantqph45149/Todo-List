import html from "../core.js";
import { connect } from "../Store.js";

const TodoItem = ({ todo, index, editing }) => {
  return html`
    <li
      class="${todo.completed && "completed"} ${editing !== null && "editing"}"
    >
      <div class="view">
        <input
          class="toggle"
          type="checkbox"
          ${todo.completed && "checked"}
          onclick="dispatch('toggleTodo', ${index})"
        />
        <label ondblclick="dispatch('startEditing', ${index})"
          >${todo.title}</label
        >
        <button
          class="destroy"
          onclick="dispatch ('deleteTodo' , ${index})"
        ></button>
      </div>
      <input
        class="edit"
        value="${todo.title}"
        onkeyup="event.keyCode === 13 &&  dispatch('editTodo', this.value.trim()) || event.keyCode === 27 && dispatch('cancelEditing')"
        onblur="dispatch('editTodo', this.value.trim())"
      />
    </li>
  `;
};

export default connect()(TodoItem);
