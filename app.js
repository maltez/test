const { createServer } =  require('http');

const server = createServer((req, res) => {
    res.write('hello');
    res.end();
});

server.listen(3000, '0.0.0.0', () => {
    console.log('Host listen on 0.0.0.0:');
});