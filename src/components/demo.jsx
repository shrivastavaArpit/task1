import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Alice');

  return (
    <div>
      <p>Hello, {name}! You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button onClick={() => setName(name === 'Alice' ? 'Bob' : 'Alice')}>
        Change Name
      </button>
    </div>
  );
};

export default Counter;
