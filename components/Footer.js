import html from "../core.js";
import { connect } from "../Store.js";

const Footer = ({ todos, filter, filters }) => {
  return html`
    <footer class="footer">
        <span class="todo-count"><strong>${
          todos.filter(filters.active).length
        }</strong> item left</span>
        <ul class="filters">
         ${Object.keys(filters).map(
           (type) => html`
             <li>
               <a
                 class="${filter === type && "selected"}"
                 href="#/"
                 onclick="dispatch('changeFilter', '${type}')"
                 >${type[0].toUpperCase() + type.slice(1)}
               </a>
             </li>
           `
         )}
        </ul>
        ${
          todos.some(filters.completed) &&
          html`<button
            class="clear-completed"
            onclick="dispatch('clearCompleted')"
          >
            Clear completed
          </button>`
        }
        
      </footer>
    </section>
    
  `;
};

export default connect()(Footer);
