import React from 'react';

const HelloWorld = () => {
  
  function sayHello() {
    alert('Hello, Zan!');
  }
  
  return (
    <button onClick={sayHello}>Click me!</button>
  );
};

export default HelloWorld;
