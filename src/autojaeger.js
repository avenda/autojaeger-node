import jaeger from 'jaeger-client'
import reporters from 'jaeger-client/dist/src/reporters/'

class AutoJaeger {


  constructor({
    serviceName, 
    sampler = new jaeger.RateLimitingSampler(1),
    remote 
  }) {
    if (!serviceName) { throw new Error("serviceName is required!") }

    if (!sampler) { throw new Error("sampler id required!") }

    this._tracer = new jaeger.Tracer(
      serviceName,
      
    )

  }
}
