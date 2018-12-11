class AutoJaeger {
  constructor(options) {
    if (!options.serviceName) { throw new Error('serviceName is required!'); }

    if (!options.sampler) { throw new Error('sampler id required!'); }
  }
}

export default AutoJaeger;
