const data = [
  {
    id: 1,
    question: "What is React?",
    answer:
      "React is an open-source JavaScript library developed by Facebook for building fast, interactive user interfaces using a component-based architecture.",
  },
  {
    id: 2,
    question: "What are React components?",
    answer:
      "Components are independent, reusable pieces of UI in React. They can be functional or class-based and accept inputs called props.",
  },
  {
    id: 3,
    question: "What are props in React?",
    answer:
      "Props are short for properties and are used to pass data from a parent component to a child component in a unidirectional flow.",
  },
  {
    id: 4,
    question: "What is state in React?",
    answer:
      "State is an object that holds data that can change over time. Unlike props, state is managed within the component and can be updated using the useState hook.",
  },
  {
    id: 5,
    question: "What is JSX?",
    answer:
      "JSX stands for JavaScript XML. It allows you to write HTML elements directly within JavaScript and is then compiled to React.createElement calls.",
  },
  {
    id: 6,
    question: "What is the difference between functional and class components?",
    answer:
      "Functional components are simple JavaScript functions that use hooks for state and lifecycle features, while class components use ES6 classes and lifecycle methods like componentDidMount.",
  },
  {
    id: 7,
    question: "What is the Virtual DOM?",
    answer:
      "The Virtual DOM is a lightweight copy of the real DOM that React uses to detect changes and update only the necessary parts of the UI efficiently.",
  },
  {
    id: 8,
    question: "What are React Hooks?",
    answer:
      "Hooks are special functions that let you use state and other React features in functional components, such as useState, useEffect, and useContext.",
  },
  {
    id: 9,
    question: "What is useEffect used for?",
    answer:
      "useEffect lets you perform side effects in functional components, such as data fetching, subscriptions, or manually changing the DOM.",
  },
  {
    id: 10,
    question: "What is the purpose of useRef?",
    answer:
      "useRef returns a mutable ref object whose .current property persists across re-renders and is often used to access DOM elements or store values that don’t trigger re-renders.",
  },
  {
    id: 11,
    question: "What is the Context API?",
    answer:
      "The Context API is a way to share data globally between components without prop drilling by creating a context provider and consumer.",
  },
  {
    id: 12,
    question: "What is React Router?",
    answer:
      "React Router is a library used for navigation and routing in React applications. It allows switching between different views of components.",
  },
  {
    id: 13,
    question: "What is the useMemo hook?",
    answer:
      "useMemo is used to memoize expensive calculations so they are only recomputed when their dependencies change, improving performance.",
  },
  {
    id: 14,
    question:
      "What is the difference between controlled and uncontrolled components?",
    answer:
      "Controlled components have their form data managed by React state, while uncontrolled components manage their own state using refs.",
  },
  {
    id: 15,
    question: "What is lifting state up in React?",
    answer:
      "Lifting state up means moving shared state to the closest common ancestor component so multiple child components can access and modify it.",
  },
];
export default data;
