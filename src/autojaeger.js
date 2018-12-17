import Instrument from '@risingstack/opentracing-auto';
import { initTracer } from 'jaeger-client';

class AutoJaeger {
  constructor(options) {
    this.HOST = 'localhost';
    this.PORT = 6832;
    console.log('[AutoJaeger][class] into constructor');
    if (!options.serviceName) { throw new Error('serviceName is required!'); }
    if (options.host) { this.HOST = options.host; }
    if (options.port) { this.PORT = options.port; }
    const config = {
      serviceName: options.serviceName,
      reporter: {
        collectorEndpoint: 'http://localhost:14268/api/traces',
      },
    };
    console.log(`[AutoJaeger][class] UPDSender setting up to: ${this.HOST}:${this.PORT}`);
    const tracer = initTracer(config);
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

export default AutoJaeger;
