import { convertMember } from 'helper/member';

describe('helper/member', () => {
  it('member auth is failed', () => {
    expect(convertMember('ใในใ')).toBeNull();
  });
});
