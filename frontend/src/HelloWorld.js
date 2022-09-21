import React from 'react';

const HelloWorld = () => {
  
  function sayHello() {
    alert('Hello, World!');
  }
  
  return (
    <button onClick={sayHello}>zan Click me!</button>
  );
};

export default HelloWorld;
