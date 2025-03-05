import React, { useState } from 'react';

// This is our main functional component called "App"
// In React, components are the building blocks of your UI.
const App: React.FC = () => {
  // useState is a React hook that allows you to add state to your component.
  // Here, we're initializing a state variable called "count" with an initial value of 0.
  const [count, setCount] = useState(0);

  // We'll also create a simple array to demonstrate rendering lists.
  const items = ['Apple', 'Banana', 'Cherry'];

  // This function handles button clicks by incrementing the count.
  // In React, event handlers like this trigger state updates and re-render the UI.
  const handleClick = () => {
    setCount(count + 1);
  };

  // Conditional rendering: we display a special message when the count exceeds 5.
  // The ternary operator is used here to decide what to render.
  const specialMessage = count > 5 ? <p>Wow, Abi you've clicked a lot!</p> : null;

  // The return statement defines the UI of this component using JSX,
  // which lets us mix HTML-like syntax with JavaScript.
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      {/* Header: Demonstrates basic JSX with embedded text */}
      <h1>Hi Abi, this is a simple React site</h1>
      
      {/* Dynamic text: Displays the current count using curly braces to embed JavaScript */}
      <p>You clicked {count} times.</p>
      
      {/* Button: onClick event triggers the handleClick function */}
      <button onClick={handleClick}>
        Click me!
      </button>
      
      {/* Conditional rendering: only shows when count > 5 */}
      {specialMessage}

      {/* List rendering: using map() to iterate over the items array.
          Each item is rendered as an <li> element.
          Note: A unique key is provided (using the index here) to help React track list items.
      */}
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {/* 
          This simple component demonstrates key React concepts:
          - **State management** with useState
          - **Event handling** with onClick
          - **Conditional rendering** using the ternary operator
          - **Rendering lists** using Array.map()
          - **JSX syntax**: mixing HTML-like elements with JavaScript logic
      */}
    </div>
  );
};

export default App;
