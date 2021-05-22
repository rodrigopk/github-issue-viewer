import { Code } from './code';

describe('create', () => {
  it('creates a new instance', () => {
    const code = Code.create({ value: 'some-value' });

    expect(code.value).toEqual('some-value');
  });
});

describe('isValid', () => {
  describe('given the code has a value', () => {
    it('is valid', () => {
      expect(Code.create({ value: 'some-value' }).isValid()).toBeTruthy();
    });
  });

  describe('given the code has no value', () => {
    it('is not valid', () => {
      expect(Code.create({}).isValid()).toBeFalsy();
    });
  });
});
