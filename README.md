# autojaeger-node

Is a wrapper around @RisingStack/jaeger-node(https://github.com/RisingStack/jaeger-node)

usage:
```
npm i autojaeger-node --save
```

In your bootstrapping file or the file you want to trace:
```
const AutoJaeger = require('../src/autojaeger');
// eslint-disable-next-line
const tracer = new AutoJaeger({
  serviceName: 'example-service1',
});
```


[![Build Status](https://travis-ci.org/avenda/autojaeger-node.svg?branch=master)](https://travis-ci.org/avenda/autojaeger-node)
