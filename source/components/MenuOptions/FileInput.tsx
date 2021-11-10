import React, { useEffect, useState } from 'react';
import { Box, Text } from 'ink';
import { UncontrolledTextInput as TextInput } from 'ink-text-input';
import { join } from 'path';

import fs from 'fs';

import { Matrix } from 'lib/types';
import { basePath, pathIsAbsolute } from '../../lib/pathUtils';

export interface FileInputProps {
  onSubmit: (matrix1: Matrix, matrix2: Matrix) => void;
}

export const FileInput = ({ onSubmit }: FileInputProps) => {
  const [path, setPath] = useState<string | null>(null);

  useEffect(() => {
    if (!path) return;

    const _path = pathIsAbsolute(path) ? path : join(basePath, path);

    console.log(path);
    console.log(_path);

    const raw = fs.readFileSync(_path, 'utf-8');
    const { matrix1, matrix2 } = JSON.parse(raw);
    console.table(matrix1);
    console.table(matrix2);

    return onSubmit(matrix1, matrix2);
  }, [path]);

  return (
    <Box>
      <Box marginLeft={1}>
        <Text>Введіть шлях до файлу з даними: </Text>
      </Box>
      <TextInput onSubmit={(value) => setPath(value)} />
    </Box>
  );
};
