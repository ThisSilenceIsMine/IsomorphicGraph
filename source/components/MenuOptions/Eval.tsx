import React from 'react';
import { Text } from 'ink';
import { inputData } from 'lib/types';
import { isIsomorphic } from '../../lib/Isomorphism';

interface EvalProps {
  data?: inputData;
}

export const Eval = ({ data }: EvalProps) => {
  if (!data)
    return <Text color="red">Введіть вхідні дані перед обчисленнями!</Text>;

  const result = isIsomorphic(data.V, data.G)
    ? 'Графи ізоморфні'
    : 'Графи не ізоморфні';

  return <Text>{result}</Text>;
};
