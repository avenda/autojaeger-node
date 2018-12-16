import AutoJaeger from '../dist/autojaeger';

// eslint-disable-next-line
const tracer = new AutoJaeger({
  serviceName: 'example-service',
});
/* eslint-disable import/first, import/order */
import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const msj = 'hello world';
  console.log(msj);
  res.send(msj);
});

app.listen(port, () => { console.log('app running'); });
