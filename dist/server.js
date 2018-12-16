"use strict";

var cov_2oc6psskg6 = function () {
  var path = "/Users/victoravendano/workspace/auto-jaeger-node/example/server.js",
      hash = "f93809fc1af25dd98e813d1cc71e63f103094847",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/victoravendano/workspace/auto-jaeger-node/example/server.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 15
        },
        end: {
          line: 6,
          column: 2
        }
      },
      "1": {
        start: {
          line: 10,
          column: 12
        },
        end: {
          line: 10,
          column: 21
        }
      },
      "2": {
        start: {
          line: 11,
          column: 13
        },
        end: {
          line: 11,
          column: 17
        }
      },
      "3": {
        start: {
          line: 13,
          column: 0
        },
        end: {
          line: 17,
          column: 3
        }
      },
      "4": {
        start: {
          line: 14,
          column: 14
        },
        end: {
          line: 14,
          column: 27
        }
      },
      "5": {
        start: {
          line: 15,
          column: 2
        },
        end: {
          line: 15,
          column: 19
        }
      },
      "6": {
        start: {
          line: 16,
          column: 2
        },
        end: {
          line: 16,
          column: 16
        }
      },
      "7": {
        start: {
          line: 19,
          column: 0
        },
        end: {
          line: 19,
          column: 56
        }
      },
      "8": {
        start: {
          line: 19,
          column: 25
        },
        end: {
          line: 19,
          column: 52
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 13,
            column: 13
          },
          end: {
            line: 13,
            column: 14
          }
        },
        loc: {
          start: {
            line: 13,
            column: 27
          },
          end: {
            line: 17,
            column: 1
          }
        },
        line: 13
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 19,
            column: 17
          },
          end: {
            line: 19,
            column: 18
          }
        },
        loc: {
          start: {
            line: 19,
            column: 23
          },
          end: {
            line: 19,
            column: 54
          }
        },
        line: 19
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
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

var _autojaeger = _interopRequireDefault(require("../dist/autojaeger"));

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line
var tracer = (cov_2oc6psskg6.s[0]++, new _autojaeger.default({
  serviceName: 'example-service'
}));
/* eslint-disable import/first, import/order */

var app = (cov_2oc6psskg6.s[1]++, (0, _express.default)());
var port = (cov_2oc6psskg6.s[2]++, 3000);
cov_2oc6psskg6.s[3]++;
app.get('/', function (req, res) {
  cov_2oc6psskg6.f[0]++;
  var msj = (cov_2oc6psskg6.s[4]++, 'hello world');
  cov_2oc6psskg6.s[5]++;
  console.log(msj);
  cov_2oc6psskg6.s[6]++;
  res.send(msj);
});
cov_2oc6psskg6.s[7]++;
app.listen(port, function () {
  cov_2oc6psskg6.f[1]++;
  cov_2oc6psskg6.s[8]++;
  console.log('app running');
});