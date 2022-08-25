const fs = require('fs');
const crypto = require('crypto');
process.env.UV_THREADPOOL_SIZE = 10;

const start = Date.now();

setTimeout(() => console.log('Timer 1 finished:'), 0);
setImmediate(() => console.log('Immediate 1 finished'));

fs.readFile('./text-file', () => {
  console.log('I/O finished');
  console.log('================================');
  setTimeout(() => console.log('Timer 2 finished'), 0);
  setTimeout(() => console.log('Timer 3 finished'), 3000);
  setImmediate(() => console.log('Immediate 2 finished'));

  process.nextTick(() => console.log('Process.nextTick finished'));

  crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
    console.log('Password encrypted');
    console.log(Date.now() - start);
  });

  crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
    console.log('Password encrypted');
    console.log(Date.now() - start);
  });

  crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
    console.log('Password encrypted');
    console.log(Date.now() - start);
  });

  crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
    console.log('Password encrypted');
    console.log(Date.now() - start);
  });

  crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
    console.log('Password encrypted');
    console.log(Date.now() - start);
  });
});

console.log('Hello from the top level code');
