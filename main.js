// customElements.define(
//   'navBar',
//   class extends HTMLElement {
//     constructor() {
//       super();
//       let template = document.getElementById("navBar");
//       let templateContent = template.content;

//       const shadowRoot = this.attachShadow({ mode: "open" });
//       shadowRoot.appendChild(templateContent.cloneNode(true));
//     }
//   }
// )

// const template = document.createElement('navBarTemplate');
// template.innerHTML = `
// <template>
// <nav class="navbar">
// <span class="navItem navLink">
//   <a href="home.html">Homepage</a>
// </span>
// <span class="navItem">NAVBAR</span>
// <span class="navItem navLink">
//   <a href="recipes.html">Recipes</a>
// </span>
// </nav>
// </template>
// `;
// document.body.appendChild(template.content);
