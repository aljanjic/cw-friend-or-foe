const friendOrFoe = require('./friendOrFoe');

describe('friendOrFoe', () => {
  it.only('["Ryan", "Kieran", "Mark"] should return ["Ryan", "Mark"]', () => {
    expect(friendOrFoe(["Ryan", "Kieran", "Mark"])).toStrictEqual(["Ryan", "Mark"]);
  });

  it('["Ryan", "Jimmy", "123", "4", "Cool Man"] should return ["Ryan"]', () => {
    expect(friendOrFoe(["Ryan", "Jimmy", "123", "4", "Cool Man"])).toStrictEqual(["Ryan"]);
  });

  it('["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"] should return ["Jimm", "Cari", "aret"]', () => {
    expect(friendOrFoe(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"])).toStrictEqual(["Jimm", "Cari", "aret"]);
  });

  it('["Love", "Your", "Face", "1"] should return ["Love", "Your", "Face"]', () => {
    expect(friendOrFoe(["Love", "Your", "Face", "1"])).toStrictEqual(["Love", "Your", "Face"]);
  });

});
