"use strict";

var cov_zzknrqd21 = function () {
  var path = "/Users/victoravendano/workspace/auto-jaeger-node/src/autojaeger.js",
      hash = "40a420503b796b740e5209f21fb700fbe38dfdd2",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/victoravendano/workspace/auto-jaeger-node/src/autojaeger.js",
    statementMap: {},
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 4,
            column: 2
          },
          end: {
            line: 4,
            column: 3
          }
        },
        loc: {
          start: {
            line: 7,
            column: 5
          },
          end: {
            line: 9,
            column: 3
          }
        },
        line: 7
      }
    },
    branchMap: {},
    s: {},
    f: {
      "0": 0
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

var _jaegerClient = _interopRequireDefault(require("jaeger-client"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AutoJaeger = function AutoJaeger(_ref) {
  var serviceName = _ref.serviceName,
      sampler = _ref.sampler;

  _classCallCheck(this, AutoJaeger);

  cov_zzknrqd21.f[0]++;
};