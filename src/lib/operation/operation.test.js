const assert = require('assert');
import Operation from './operation.js';

describe('测试Operation对象', function () {
  describe('测试toFixed方法', function () {
    const operation = new Operation()
    it('3===>3.0000', function () {
      const a = operation.toFixed(3, 4)
      assert.equal(a, '3.0000')
    });
    it('3.99999===>4.0000', function () {
      const a = operation.toFixed(3.99999, 4)
      assert.equal(a, '4.0000')
    });
    it('0.001985===>0.0020', function () {
      const a = operation.toFixed(0.001985, 4)
      assert.equal(a, '0.0020')
    });
  });
  describe('测试add方法', function () {
    it('1.985+1===>2.985', function () {
      const a = new Operation(1.985, 1).add()
      assert.equal(a, '2.985')
    });
    it('1.985+1.9999===>3.98,2', function () {
      const a = new Operation(1.985, 1.9999).add(2)
      assert.equal(a, '3.98')
    });
  });
  describe('测试sub方法', function () {
    it('1.985-1===>0.985', function () {
      const a = new Operation(1.985, 1).sub()
      assert.equal(a, '0.985')
    });
    it('1.985-1.9999===>-0.01,2', function () {
      const a = new Operation(1.985, 1.9999).sub(2)
      assert.equal(a, '-0.01')
    });
    it('1-1.985===>-0.97,2', function () {
      const a = new Operation(1, 1.985).sub(2)
      assert.equal(a, '-0.97')
    });
  });
  describe('测试mul方法', function () {
    it('1.985*1.985===>3.940225', function () {
      const a = new Operation(1.985, 1.985).mul()
      assert.equal(a, '3.940225')
    });
    it('1.985*1.985===>3.940,3', function () {
      const a = new Operation(1.985,1.985).mul(3)
      assert.equal(a, '3.940')
    });
  });
  describe('测试divide方法', function () {
    it('3.940225/1.985===>3.940225', function () {
      const a = new Operation(3.940225, 1.985).divide()
      assert.equal(a, '1.985')
    });
    it('3.940225/-1.985===>-1.985,4', function () {
      const a = new Operation(3.940225,-1.985).divide(4)
      assert.equal(a, '-1.9850')
    });
  });
});