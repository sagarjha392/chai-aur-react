# Learning React

## start new project

### basic react app using create-react-app

- project name: 01basicreact

- cra-template: it was used before react 2022 dec update currently not in use

```bash

npx create-react-app 01basicreact #creating a react application

```

```bash
cd .\01basicreact # go to directory
```

- run

```bash
npm run start # start the application server
```

- build

```bash
npm run build # build the production interface for  application server
```

Do not use this as this was depreciated by the react development team

### basic react app using create vite@latest

```bash
npm create vite@latest
```

we need to initial node

```bash
npm i
```

or

```bash
npm install
```

- run

```bash

npm run dev
```

### React Hooks

- - React Hooks are a powerful feature that allow you to use state and other React features without writing a class. Here's a brief overview of the hooks you mentioned:

#### useState

- This hook allows you to add state to functional components¹. It returns a pair: the current state value and a function that lets you update it². You can use it when you want to keep track of a variable's value that might change over time and cause the component to re-render¹.

```jsx
const [count, setCount] = useState(0);
```

#### useEffect

- This hook lets you perform side effects in function components¹. It runs after every render by default, but you can also decide to run it only when certain values have changed¹. Use it for tasks like fetching data, manually changing the DOM, and setting up subscriptions¹.

```jsx
useEffect(() => {
  console.log(`You have clicked the button ${count} times`);
}, [count]);
```

#### useRef

- This hook creates a mutable object with a `.current` property⁴. It can be useful for keeping any mutable value around (similar to instance fields in classes), which doesn't trigger re-render when it changes. It's commonly used to keep references to elements⁴.

```jsx
const inputEl = useRef(null);
<input ref={inputEl} type="text" />;
```

#### useCallback

- This hook returns a memoized version of the callback that only changes if one of the dependencies has changed². It's useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders².

```jsx
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
```

-- Remember, hooks are only available in function components and custom hooks¹. Always use hooks at the top level of your React function². Don't call hooks inside loops, conditions, or nested functions to ensure that they're called in the same order each time a component renders².

#### useId hook

- Use of useId hook is generate random id for the html elements prefer not to use for css use

```jsx
const myId = useId();
console.log(myId);
```

### Routes

#### Installation

```bash
npm install react-router-dom
```

#### routing methods of Links and urls

- Link: tag is use to navigate from one page to another without any reloading of the page

```jsx
<Link
  to="#"
  className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
>
  Log in
</Link>
```

- NavLink: tag is used in navigation bar to navigate from one page to another Like 'Link' tag with speacial features of isActive

```jsx
<NavLink
  to={"/"}
  className={({ isActive }) =>
    `block py-2 pr-4 pl-3 duration-200 ${
      isActive ? "text-orange-700" : "text-gray-700"
    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 `
  }
>
  Home
</NavLink>
```

#### How to Creating Routes ?

- Method 1:

```jsx
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
```

- Method 2:

```jsx
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userid" element={<User />} />
    </Route>
  )
);
```
#### New hooks and features in react-router-dom
- react router provides some new speacial methods

1. loader

```jsx
export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/sagarjha392");
  return response.json();
};
<Route path="github" element={<Github />} loader={githubInfoLoader} />;
```

- use useLoader hook to fetch information from the loader

```jsx
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  return (
    <div className="text-center m-4 bg-gray-500 text-white p-4 text-3xl">
      Github Followers: {data.followers}
      <img src={data.avatar_url} alt="profile pic" width={300} />
    </div>
  );
}

export default Github;
```
