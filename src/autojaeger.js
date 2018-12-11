import Instrument from '@risingstack/opentracing-auto';
import jaeger from 'jaeger-client';
import UDPSender from 'jaeger-client/dist/src/reporters/udp_sender';

class AutoJaeger {
  constructor(options) {
    if (!options.serviceName) { throw new Error('serviceName is required!'); }
    if (!options.sampler) { throw new Error('sampler id required!'); }
    const sender = new UDPSender(
      {
        host: 'localhost',
        port: 123,
      },
    );
    const tracer = new jaeger.RemoteReporter(sender);
    this.instrument = new Instrument(
      {
        tracers: [
          tracer,
        ],
      },
    );
  }
}

export default AutoJaeger;
