import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
function MyApp() {
  return (
    <div>
      <h1>custom App!</h1>
    </div>
  );
}

function customRender(reactElement, container) {
  const domElement2 = document.createElement(reactElement.type);
  domElement2.innerHTML = reactElement.children;

  const item = reactElement.props;

  for (const prop in item) {
    if (prop !== "children") {
      domElement2.setAttribute(prop, item[prop]);
    } else {
      continue;
    }
  }
  container.appendChild(domElement2);
}

// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Click me to visit google",
// };

const reactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "clickMe visit google"
);

const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit Google
  </a>
);


const anotherUser = "chai aur"
ReactDOM.createRoot(documweent.getElementById("root")).render(
  <App />
);
