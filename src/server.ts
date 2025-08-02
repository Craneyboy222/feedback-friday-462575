import app from './app';
import http from 'http';
import { AddressInfo } from 'net';

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(PORT, () => {
  const address = server.address() as AddressInfo;
  console.log(`Server running on port ${address.port}`);
});