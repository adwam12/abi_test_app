// Import necessary modules from Express and Node.js.
// We import both the default export 'express' and named exports 'Request' and 'Response'.
// 'Request' and 'Response' are TypeScript types that provide type safety for our HTTP requests and responses.
import express, { Request, Response } from 'express';
// Import Node.js's built-in 'path' module to help us work with file and directory paths in a cross-platform way.
import path from 'path';

// Create an instance of an Express application.
// TypeScript infers the type of 'app' as an Express application, so you get full IntelliSense.
const app = express();

// Define a port number for the server.
// We explicitly annotate the type as 'number' for clarity.
const port: number = 3000;

// Middleware: Serve static files from the frontend's build directory.
// __dirname is a Node.js variable that holds the current directory path.
// 'path.join' constructs a path string that works correctly on any operating system.
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// Define a route for the root URL ('/').
// Here, we use an arrow function with two parameters: req and res.
// We explicitly annotate these parameters with the types 'Request' and 'Response' for type checking.
app.get('/', (req: Request, res: Response) => {
  // Respond with the index.html file from the frontend build directory.
  // This uses the 'sendFile' method to serve an HTML file.
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

// Start the server and listen on the specified port.
// The callback function is executed once the server starts successfully.
// TypeScript infers types in the callback, keeping the code clean and type-safe.
app.listen(port, () => {
  console.log(`Server's running on port ${port}`);
});
