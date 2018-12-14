import { expect } from 'chai';
import sinon from 'sinon';
import jaeger from 'jaeger-client';
import AutoJaeger from '../../src/autojaeger';


describe('AutoJaeger Tests', () => {
  it('should load constructor', () => {
    const dummySender = {};
    sinon.stub(jaeger, 'RemoteReporter').callsFake(() => dummySender);
    expect(
      new AutoJaeger(
        {
          serviceName: 'dummy-service-name',
          sampler: 'dummy-sampler-id',
        },
      ),
    )
      .to.be.an.instanceof(AutoJaeger);
  });

  it('should an get error by given a empty serviceName', () => {
    expect(() => {
      /* eslint-disable no-new */
      new AutoJaeger({
        sampler: 'dummy-sampler-id',
      });
    }).to.throw();
  });
});
