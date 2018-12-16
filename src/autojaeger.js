import Instrument from '@risingstack/opentracing-auto';
import jaeger from 'jaeger-client';
import UDPSender from 'jaeger-client/dist/src/reporters/udp_sender';


class AutoJaeger {
  constructor(options) {
    console.log('[AutoJaeger][class] into constructor');
    this.PORT = 6832;
    this.HOST = 'localhost';
    if (!options.serviceName) { throw new Error('serviceName is required!'); }
    if (options.host) { this.HOST = options.host; }
    if (options.port) { this.PORT = options.port; }

    const sender = new UDPSender(
      {
        host: this.HOST,
        port: this.PORT,
      },
    );
    console.log(`[AutoJaeger][class] UPDSender setting up to: ${this.HOST}:${this.PORT}`);
    const reporter = new jaeger.RemoteReporter(sender);
    const sampler = new jaeger.RateLimitingSampler(1);
    const tracer = new jaeger.Tracer(
      options.serviceName,
      reporter,
      sampler,
    );
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
