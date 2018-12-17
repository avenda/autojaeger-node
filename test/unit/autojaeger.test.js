const { expect } = require('chai');
const sinon = require('sinon');
const jaeger = require('jaeger-client');
const AutoJaeger = require('../../src/autojaeger');


describe('AutoJaeger Tests', () => {
  it('should load constructor', () => {
    const dummySender = {};
    sinon.stub(jaeger, 'RemoteReporter').callsFake(() => dummySender);
    expect(
      new AutoJaeger(
        {
          serviceName: 'dummy-service-name',
        },
      ),
    )
      .to.be.an.instanceof(AutoJaeger);
  });

  it('should throw exception', () => {
    /* eslint-disable no-new */
    expect(() => { new AutoJaeger(); })
      .to.throw();
  });
});
