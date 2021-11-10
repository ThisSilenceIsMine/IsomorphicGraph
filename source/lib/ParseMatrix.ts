import _ from 'lodash';
import { Matrix } from './types';

export const parseMatrix = (input: string, base: number): Matrix => {
  const array = input
    .replaceAll(/(,|\s)\s*/g, '')
    .split('')
    .map((x) => {
      const num = parseInt(x);
      if (isNaN(num)) throw 'Invalid input';
      return num;
    });

  return _.chunk(array, base);
};
