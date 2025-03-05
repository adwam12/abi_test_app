// Import the React library which is needed to write JSX (our HTML-like syntax)
import React from 'react';

// Import the ReactDOM client which is responsible for rendering your React components into the DOM
import ReactDOM from 'react-dom/client';

// Import the main App component from our local file. This is where your application starts.
import App from './App';

// Find the DOM element with the id "root" where the React app will be mounted.
// In your index.html file, you should have a corresponding element like: <div id="root"></div>
const rootElement = document.getElementById('root');

// Create a React root for rendering. The exclamation mark tells TypeScript that you're sure the element exists.
const root = ReactDOM.createRoot(rootElement!);

// Render the App component into the DOM, wrapped in React.StrictMode for highlighting potential issues in development.
// React.StrictMode does not render any visible UI, but it activates additional checks and warnings for its descendants.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
