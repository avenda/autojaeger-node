import chai from 'chai';
import AutoJaeger from '../../src/autojaeger';


describe('AutoJaeger Tests', () => {
  it('should load constructor', () => {
    chai.expect(
      new AutoJaeger(
        {
          serviceName: 'dummy-service-name',
          sampler: 'dummy-sampler-id',
        },
      ),
    )
      .to.be.an.instanceof(AutoJaeger);
  });
});
