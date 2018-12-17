/* eslint-disable import/order */
const AutoJaeger = require('../src/autojaeger');
// eslint-disable-next-line
const tracer = new AutoJaeger({
  serviceName: 'example-service1',
});
/* eslint-disable import/first, import/order */
const express = require('express');

const http = require('http');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const msj = 'hello world';
  return http.get('http://httpbin.org/status/404', (HttpRes) => {
    res.statusCode = HttpRes.statusCode;
    res.json({
      status: res.statusCode,
      body: msj,
    });
  });
});

app.listen(port, () => { console.log('app running'); });
