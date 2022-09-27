// const h1DOM = document.createElement('h1') as HTMLElement;
// h1DOM.title = "Hello" as string;
// h1DOM. className = 'heading' as string;

// h1DOM.innerText = 'Hello Guys';

// document.body.appendChild(h1DOM);
import  React from 'react';
import ReactDOM from 'react-dom';
const h1DOM = document.createElement("h1") as HTMLElement;
const h1React = React.createElement(
  "h1",
  { title: "Hello", className: "dohung" },
  "HungDo"
);
ReactDOM.render(h1React, h1DOM);
console.log(h1React);
