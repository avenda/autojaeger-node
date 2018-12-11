import chai from 'chai'
import {AutoJaeger} from '../../src/autojaeger'

const expect = chai.expect;

describe('AutoJaeger Tests', () => {
  it('should load constructor', () => {
    expect(new AutoJaeger({serviceName: "dummy-service-name", })).to.be.an.instanceof(AutoJaeger);
  })
})
