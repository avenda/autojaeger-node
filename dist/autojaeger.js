"use strict";

var cov_zzknrqd21 = function () {
  var path = "/Users/victoravendano/workspace/auto-jaeger-node/src/autojaeger.js",
      hash = "5e87b6b24990d0896d1a83673ded9deb19f30bc9",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/victoravendano/workspace/auto-jaeger-node/src/autojaeger.js",
    statementMap: {
      "0": {
        start: {
          line: 8,
          column: 4
        },
        end: {
          line: 8,
          column: 56
        }
      },
      "1": {
        start: {
          line: 9,
          column: 4
        },
        end: {
          line: 9,
          column: 21
        }
      },
      "2": {
        start: {
          line: 10,
          column: 4
        },
        end: {
          line: 10,
          column: 28
        }
      },
      "3": {
        start: {
          line: 11,
          column: 4
        },
        end: {
          line: 11,
          column: 78
        }
      },
      "4": {
        start: {
          line: 11,
          column: 32
        },
        end: {
          line: 11,
          column: 76
        }
      },
      "5": {
        start: {
          line: 12,
          column: 4
        },
        end: {
          line: 12,
          column: 51
        }
      },
      "6": {
        start: {
          line: 12,
          column: 24
        },
        end: {
          line: 12,
          column: 49
        }
      },
      "7": {
        start: {
          line: 13,
          column: 4
        },
        end: {
          line: 13,
          column: 51
        }
      },
      "8": {
        start: {
          line: 13,
          column: 24
        },
        end: {
          line: 13,
          column: 49
        }
      },
      "9": {
        start: {
          line: 15,
          column: 19
        },
        end: {
          line: 20,
          column: 5
        }
      },
      "10": {
        start: {
          line: 21,
          column: 4
        },
        end: {
          line: 21,
          column: 90
        }
      },
      "11": {
        start: {
          line: 22,
          column: 21
        },
        end: {
          line: 22,
          column: 54
        }
      },
      "12": {
        start: {
          line: 23,
          column: 20
        },
        end: {
          line: 23,
          column: 53
        }
      },
      "13": {
        start: {
          line: 24,
          column: 19
        },
        end: {
          line: 28,
          column: 5
        }
      },
      "14": {
        start: {
          line: 29,
          column: 4
        },
        end: {
          line: 29,
          column: 59
        }
      },
      "15": {
        start: {
          line: 30,
          column: 4
        },
        end: {
          line: 36,
          column: 6
        }
      },
      "16": {
        start: {
          line: 37,
          column: 4
        },
        end: {
          line: 37,
          column: 59
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 7,
            column: 2
          },
          end: {
            line: 7,
            column: 3
          }
        },
        loc: {
          start: {
            line: 7,
            column: 23
          },
          end: {
            line: 38,
            column: 3
          }
        },
        line: 7
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 11,
            column: 4
          },
          end: {
            line: 11,
            column: 78
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
            column: 78
          }
        }, {
          start: {
            line: 11,
            column: 4
          },
          end: {
            line: 11,
            column: 78
          }
        }],
        line: 11
      },
      "1": {
        loc: {
          start: {
            line: 12,
            column: 4
          },
          end: {
            line: 12,
            column: 51
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 12,
            column: 4
          },
          end: {
            line: 12,
            column: 51
          }
        }, {
          start: {
            line: 12,
            column: 4
          },
          end: {
            line: 12,
            column: 51
          }
        }],
        line: 12
      },
      "2": {
        loc: {
          start: {
            line: 13,
            column: 4
          },
          end: {
            line: 13,
            column: 51
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 13,
            column: 4
          },
          end: {
            line: 13,
            column: 51
          }
        }, {
          start: {
            line: 13,
            column: 4
          },
          end: {
            line: 13,
            column: 51
          }
        }],
        line: 13
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
      "14": 0,
      "15": 0,
      "16": 0
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

var _jaegerClient = _interopRequireDefault(require("jaeger-client"));

var _udp_sender = _interopRequireDefault(require("jaeger-client/dist/src/reporters/udp_sender"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AutoJaeger = function AutoJaeger(options) {
  _classCallCheck(this, AutoJaeger);

  cov_zzknrqd21.f[0]++;
  cov_zzknrqd21.s[0]++;
  console.log('[AutoJaeger][class] into constructor');
  cov_zzknrqd21.s[1]++;
  this.PORT = 6832;
  cov_zzknrqd21.s[2]++;
  this.HOST = 'localhost';
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

  var sender = (cov_zzknrqd21.s[9]++, new _udp_sender.default({
    host: this.HOST,
    port: this.PORT
  }));
  cov_zzknrqd21.s[10]++;
  console.log("[AutoJaeger][class] UPDSender setting up to: ".concat(this.HOST, ":").concat(this.PORT));
  var reporter = (cov_zzknrqd21.s[11]++, new _jaegerClient.default.RemoteReporter(sender));
  var sampler = (cov_zzknrqd21.s[12]++, new _jaegerClient.default.RateLimitingSampler(1));
  var tracer = (cov_zzknrqd21.s[13]++, new _jaegerClient.default.Tracer(options.serviceName, reporter, sampler));
  cov_zzknrqd21.s[14]++;
  console.log('[AutoJaeger][class] tracer setup finish');
  cov_zzknrqd21.s[15]++;
  this.instrument = new _opentracingAuto.default({
    tracers: [tracer]
  });
  cov_zzknrqd21.s[16]++;
  console.log('[AutoJaeger][class] tracer instrumented');
};

var _default = AutoJaeger;
exports.default = _default;