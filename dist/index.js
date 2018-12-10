'use strict';

var cov_16z1cjj0w5 = function () {
  var path = "/Users/victoravendano/workspace/auto-jaeger-node/src/index.js",
      hash = "837356ad07131fca0d1da1aa2c7568ce5e87391f",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/victoravendano/workspace/auto-jaeger-node/src/index.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 0
        },
        end: {
          line: 3,
          column: 40
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0
    },
    f: {},
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184"
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

cov_16z1cjj0w5.s[0]++;
module.exports = require('./autojaeger');