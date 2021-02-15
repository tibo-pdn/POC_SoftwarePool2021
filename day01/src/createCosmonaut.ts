import { Cosmonaut } from '../src/types';

export function createCosmonaut(name: string, country: string, mission: string): Cosmonaut {
  const cosmonaut: Cosmonaut = {
    name: name,
    country: country,
    mission: mission,
  };

  return cosmonaut;
}
