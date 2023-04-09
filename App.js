// console.log("Hello I am script.js Hollo World Program....!");

// const heading = document.createElement("h1");
// heading.innerHTML = "Hello World from JavaScript..!";

// const root = document.getElementById("root");
// root.appendChild(heading);

const parent = React.createElement(
     "div",
     { id: "parent" },
     React.createElement(
          "div",
          { id: "child" },[
          React.createElement("h1",{},"I'm h1 Tag !"),
          React.createElement("h1",{},"I'm h1 Tag !"),
     ])
);

// JSX



// const heading = React.createElement("h1",
//      { id: "heading", xyz: "abc" },
//      "Hello World from React!");

console.log(parent);    // object
const root = ReactDom.createRoot(document.getElementById("root"));

root.render(parent);


