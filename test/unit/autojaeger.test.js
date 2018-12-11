import chai from 'chai';
import AutoJaeger from '../../src/autojaeger';


describe('AutoJaeger Tests', () => {
  it('should load constructor', () => {
    chai.expect(new AutoJaeger({ serviceName: 'dummy-service-name' })).to.be.an.instanceof(AutoJaeger);
  });
});
