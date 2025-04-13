import type { Periodic } from './periodic-table.type';

export const periodicList: Periodic[] = [
  {
    id: 'H',
    name: 'Hydrogen',
    type: 'gas',
    atomicNumber: 1,
    atomicWeight: '1.0079',
    shells: '1',
    orbit: '1s1',
    meltingPoint: '-259.14 C',
    boilingPoint: '-252.87 C',
  },
  {
    id: 'He',
    name: 'Helium',
    type: 'gas',
    atomicNumber: 2,
    atomicWeight: '4.0026',
    shells: '2',
    orbit: '1s2',
    meltingPoint: '-272C @ 26ATM',
    boilingPoint: '-268.6 C',
  },
];
