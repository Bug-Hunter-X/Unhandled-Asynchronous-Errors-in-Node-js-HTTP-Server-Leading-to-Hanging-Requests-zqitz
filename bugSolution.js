const http = require('http');

const server = http.createServer((req, res) => {
  // Use res.on('error', ...) to handle errors
  res.on('error', (err) => {
    console.error('Response error:', err);
    res.end(); // Ensure the response is ended
  });

  someAsyncOperation().then(() => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Success!');
  }).catch(error => {
    // Log the error for debugging
    console.error('Error:', error);
    res.statusCode = 500; // Set appropriate status code
    res.end(); // Ensure the response is ended
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

async function someAsyncOperation() {
  const randomNumber = Math.random();
  if (randomNumber < 0.5) {
    throw new Error('Simulated asynchronous error');
  }
  return 'Operation successful';
}