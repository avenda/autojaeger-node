"use strict";

var cov_zzknrqd21 = function () {
  var path = "/Users/victoravendano/workspace/auto-jaeger-node/src/autojaeger.js",
      hash = "0c6d9f8604d4b5590c18cf1b60e8c52612333abb",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/victoravendano/workspace/auto-jaeger-node/src/autojaeger.js",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 4
        },
        end: {
          line: 6,
          column: 28
        }
      },
      "1": {
        start: {
          line: 7,
          column: 4
        },
        end: {
          line: 7,
          column: 21
        }
      },
      "2": {
        start: {
          line: 8,
          column: 4
        },
        end: {
          line: 8,
          column: 56
        }
      },
      "3": {
        start: {
          line: 9,
          column: 4
        },
        end: {
          line: 9,
          column: 78
        }
      },
      "4": {
        start: {
          line: 9,
          column: 32
        },
        end: {
          line: 9,
          column: 76
        }
      },
      "5": {
        start: {
          line: 10,
          column: 4
        },
        end: {
          line: 10,
          column: 51
        }
      },
      "6": {
        start: {
          line: 10,
          column: 24
        },
        end: {
          line: 10,
          column: 49
        }
      },
      "7": {
        start: {
          line: 11,
          column: 4
        },
        end: {
          line: 11,
          column: 51
        }
      },
      "8": {
        start: {
          line: 11,
          column: 24
        },
        end: {
          line: 11,
          column: 49
        }
      },
      "9": {
        start: {
          line: 12,
          column: 19
        },
        end: {
          line: 17,
          column: 5
        }
      },
      "10": {
        start: {
          line: 18,
          column: 4
        },
        end: {
          line: 18,
          column: 90
        }
      },
      "11": {
        start: {
          line: 19,
          column: 19
        },
        end: {
          line: 19,
          column: 37
        }
      },
      "12": {
        start: {
          line: 20,
          column: 4
        },
        end: {
          line: 20,
          column: 59
        }
      },
      "13": {
        start: {
          line: 21,
          column: 4
        },
        end: {
          line: 27,
          column: 6
        }
      },
      "14": {
        start: {
          line: 28,
          column: 4
        },
        end: {
          line: 28,
          column: 59
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 5,
            column: 2
          },
          end: {
            line: 5,
            column: 3
          }
        },
        loc: {
          start: {
            line: 5,
            column: 23
          },
          end: {
            line: 29,
            column: 3
          }
        },
        line: 5
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 9,
            column: 4
          },
          end: {
            line: 9,
            column: 78
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 9,
            column: 4
          },
          end: {
            line: 9,
            column: 78
          }
        }, {
          start: {
            line: 9,
            column: 4
          },
          end: {
            line: 9,
            column: 78
          }
        }],
        line: 9
      },
      "1": {
        loc: {
          start: {
            line: 10,
            column: 4
          },
          end: {
            line: 10,
            column: 51
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 10,
            column: 4
          },
          end: {
            line: 10,
            column: 51
          }
        }, {
          start: {
            line: 10,
            column: 4
          },
          end: {
            line: 10,
            column: 51
          }
        }],
        line: 10
      },
      "2": {
        loc: {
          start: {
            line: 11,
            column: 4
          },
          end: {
            line: 11,
            column: 51
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 11,
            column: 4
          },
          end: {
            line: 11,
            column: 51
          }
        }, {
          start: {
            line: 11,
            column: 4
          },
          end: {
            line: 11,
            column: 51
          }
        }],
        line: 11
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184"
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _opentracingAuto = _interopRequireDefault(require("@risingstack/opentracing-auto"));

var _jaegerClient = require("jaeger-client");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AutoJaeger = function AutoJaeger(options) {
  _classCallCheck(this, AutoJaeger);

  cov_zzknrqd21.f[0]++;
  cov_zzknrqd21.s[0]++;
  this.HOST = 'localhost';
  cov_zzknrqd21.s[1]++;
  this.PORT = 6832;
  cov_zzknrqd21.s[2]++;
  console.log('[AutoJaeger][class] into constructor');
  cov_zzknrqd21.s[3]++;

  if (!options.serviceName) {
    cov_zzknrqd21.b[0][0]++;
    cov_zzknrqd21.s[4]++;
    throw new Error('serviceName is required!');
  } else {
    cov_zzknrqd21.b[0][1]++;
  }

  cov_zzknrqd21.s[5]++;

  if (options.host) {
    cov_zzknrqd21.b[1][0]++;
    cov_zzknrqd21.s[6]++;
    this.HOST = options.host;
  } else {
    cov_zzknrqd21.b[1][1]++;
  }

  cov_zzknrqd21.s[7]++;

  if (options.port) {
    cov_zzknrqd21.b[2][0]++;
    cov_zzknrqd21.s[8]++;
    this.PORT = options.port;
  } else {
    cov_zzknrqd21.b[2][1]++;
  }

  var config = (cov_zzknrqd21.s[9]++, {
    serviceName: options.serviceName,
    reporter: {
      collectorEndpoint: 'http://localhost:14268/api/traces'
    }
  });
  cov_zzknrqd21.s[10]++;
  console.log("[AutoJaeger][class] UPDSender setting up to: ".concat(this.HOST, ":").concat(this.PORT));
  var tracer = (cov_zzknrqd21.s[11]++, (0, _jaegerClient.initTracer)(config));
  cov_zzknrqd21.s[12]++;
  console.log('[AutoJaeger][class] tracer setup finish');
  cov_zzknrqd21.s[13]++;
  this.instrument = new _opentracingAuto.default({
    tracers: [tracer]
  });
  cov_zzknrqd21.s[14]++;
  console.log('[AutoJaeger][class] tracer instrumented');
};

var _default = AutoJaeger;
exports.default = _default;