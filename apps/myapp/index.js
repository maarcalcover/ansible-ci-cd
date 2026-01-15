const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('Hola desde Ansible + CI/CD\n');
});

server.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
