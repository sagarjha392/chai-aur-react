function customRender(reactElement, container) {
    // const domElement = document.createElement(reactElement.type);
    // domElement.innerHTML = reactElement.children;
    // domElement.setAttribute("href", reactElement.props.href);
    // domElement.setAttribute("target", reactElement.props.target);
    // container.appendChild(domElement);

  const domElement2 = document.createElement(reactElement.type);
  domElement2.innerHTML = reactElement.children;

  const item = reactElement.props
//   console.log(item)
  for (const prop in item) {
    if(prop !== 'children'){
        domElement2.setAttribute(prop, item[prop]);
    }
    else{
        continue;
    } 
  }
  container.appendChild(domElement2);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};

const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer);
