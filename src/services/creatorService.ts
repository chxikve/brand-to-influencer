
import { atom } from 'jotai';
import { creators as initialCreators, moreCreators as initialMoreCreators, Creator } from '@/data/creators';

// Combine both creator arrays for unified management
const allInitialCreators = [...initialCreators, ...initialMoreCreators];

export const creatorsAtom = atom<Creator[]>(allInitialCreators);
