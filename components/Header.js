import html from "../core.js";

const Header = () => {
  return html`
    <header class="header">
      <h1>todos</h1>
      <input
        class="new-todo"
        placeholder="What needs to be done?"
        autofocus
        onkeyup="event.keyCode === 13 && dispatch('addTodo', event.target.value.trim())"
      />
    </header>
  `;
};

export default Header;
