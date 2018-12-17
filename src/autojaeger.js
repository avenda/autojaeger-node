const Instrument = require('@risingstack/opentracing-auto');
const jaeger = require('jaeger-client');

class AutoJaeger {
  constructor(options) {
    this.HOST = 'localhost';
    this.PORT = 6832;
    console.log('[AutoJaeger][class] into constructor');
    /* eslint-disable no-unused-expressions */
    try {
      options.serviceName;
    } catch (e) {
      throw new Error('serviceName is required!');
    }
    if (options.host) { this.HOST = options.host; }
    if (options.port) { this.PORT = options.port; }
    const config = {
      serviceName: options.serviceName,
      reporter: {
        collectorEndpoint: `http://${this.HOST}:${this.PORT}/api/traces`,
      },
    };
    console.log(`[AutoJaeger][class] Sender setting up to: ${this.HOST}:${this.PORT}`);
    const tracer = jaeger.initTracer(config);
    console.log('[AutoJaeger][class] tracer setup finish');
    this.instrument = new Instrument(
      {
        tracers: [
          tracer,
        ],
      },
    );
    console.log('[AutoJaeger][class] tracer instrumented');
  }
}

module.exports = AutoJaeger;
