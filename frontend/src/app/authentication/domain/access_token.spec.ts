import { AccessToken } from './access_token';

describe('create', () => {
  it('creates a new instance', () => {
    const token = AccessToken.create({ value: 'some-value' });

    expect(token.value).toEqual('some-value');
  });
});

describe('toJSON', () => {
  it('returns the correct object', () => {
    const token = AccessToken.create({ value: 'some-value' });

    expect(token.toJSON()).toEqual({
      value: 'some-value',
    });
  });
});
