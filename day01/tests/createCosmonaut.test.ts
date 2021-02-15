import { describe, expect, it } from '@jest/globals';
import { createCosmonaut } from '../src/createCosmonaut';
import { Cosmonaut, Country, Mission } from '../src/types';

describe('Test Cosmonaut function', () => {
  it('Simply 1 + 1', () => {
    const cosmonaut: Cosmonaut = {
      name: 'Antoine',
      country: Country.FR,
      mission: Mission.ISS,
    };
    expect(createCosmonaut('Antoine', Country.FR, Mission.ISS))
      .toBe(cosmonaut);
  });
});
