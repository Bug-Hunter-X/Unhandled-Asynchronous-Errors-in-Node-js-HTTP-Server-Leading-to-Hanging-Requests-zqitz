# Unhandled Asynchronous Errors in Node.js HTTP Server

This repository demonstrates a common error in Node.js where unhandled errors in asynchronous operations within an HTTP server's request handler can lead to hanging requests.  The server fails to send a proper response to the client when an error occurs, resulting in a poor user experience.

## Problem

The `bug.js` file showcases a Node.js HTTP server with an asynchronous operation (`someAsyncOperation`).  If this operation throws an error, the server doesn't gracefully handle it and fails to end the response.  This leaves the client waiting indefinitely.

## Solution

The `bugSolution.js` file demonstrates the correct way to handle asynchronous errors. The `res.on('error', ...)` ensures that the response gets ended even if an error happens before that.  Proper error handling prevents hanging requests and provides a better user experience.