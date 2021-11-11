import React, { useEffect, useState } from 'react';
import { Box, Text, useApp } from 'ink';
import { UncontrolledTextInput as TextInput } from 'ink-text-input';

import { Matrix } from 'lib/types';
import { parseMatrix } from '../../lib/parseMatrix';

export interface FileInputProps {
  onSubmit: (matrix1: Matrix, matrix2: Matrix) => void;
}

export const KeyboardInput = ({ onSubmit }: FileInputProps) => {
  const [base, setBase] = useState<number>();
  const [error, setError] = useState<string>();
  const [matrix1, setMatrix1] = useState<Matrix>();
  const [matrix2, setMatrix2] = useState<Matrix>();

  const { exit } = useApp();

  useEffect(() => {
    if (!matrix1 || !matrix2) return;

    onSubmit(matrix1, matrix2);
  }, [matrix2]);

  const onInputSubmit = (set: React.Dispatch<any>) => (raw: string) => {
    if (!base) {
      throw 'Розмірність не вказана!';
    }
    const _res = parseMatrix(raw, base);
    set(_res);
  };

  if (error) {
    return <Text color="red">{error}</Text>;
  }

  if (!base)
    return (
      <Prompt
        query="Введіть розмірність матриць:"
        onSubmit={(value) => {
          const val = parseInt(value);
          if (isNaN(val) || val < 1) {
            setError('Не корректна розмірність!');
            setTimeout(() => exit(), 500);
          }
          setBase(val);
        }}
      />
    );

  if (!matrix1)
    return (
      <Prompt
        query="Введіть матрицю першого графа:"
        onSubmit={onInputSubmit(setMatrix1)}
      />
    );

  if (!matrix2)
    return (
      <Prompt
        query="Введіть матрицю другого графа:"
        onSubmit={onInputSubmit(setMatrix2)}
      />
    );

  return null;
};

interface PromptProps {
  query: string;
  onSubmit: (value: string) => void;
}

const Prompt = ({ query, onSubmit }: PromptProps) => {
  return (
    <Box>
      <Box>
        <Text>{query}</Text>
      </Box>
      <TextInput onSubmit={onSubmit} />
    </Box>
  );
};
