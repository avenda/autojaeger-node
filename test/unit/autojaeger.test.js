const { expect } = require('chai');
const sinon = require('sinon');
const jaeger = require('jaeger-client');
const AutoJaeger = require('../../src/autojaeger');


describe('AutoJaeger Tests', () => {
  it('should load constructor', () => {
    expect(
      new AutoJaeger(
        {
          serviceName: 'dummy-service-name',
          host: 'dummy-host',
          port: 1234,
        },
      ),
    ).to.be.an.instanceof(AutoJaeger);
  });

  it('should throw exception with no data on constructor', () => {
    /* eslint-disable no-new */
    expect(() => { new AutoJaeger(); })
      .to.throw();
  });

  it('should throw exception when not serviceName specified', () => {
    /* eslint-disable no-new */
    expect(() => { new AutoJaeger(); })
      .to.throw();
  });
});
