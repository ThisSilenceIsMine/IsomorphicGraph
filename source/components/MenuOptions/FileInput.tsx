import React, { useEffect, useState } from 'react';
import { Box, Text, useApp } from 'ink';
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
  const [error, setError] = useState<string | null>(null);

  const { exit } = useApp();

  useEffect(() => {
    if (!path) return;

    const _path = pathIsAbsolute(path) ? path : join(basePath, path);

    try {
      if (!fs.existsSync(_path)) throw `Файл за шляхом ${_path} не знайдено!`;

      const raw = fs.readFileSync(_path, 'utf-8');
      const { matrix1, matrix2 } = JSON.parse(raw);

      if (!matrix1 || !matrix2) {
        throw 'Вхідні дані пошкоджено!';
      }

      return onSubmit(matrix1, matrix2);
    } catch (error) {
      if (typeof error === 'string') {
        setError(error);
      } else console.error(error);
      setTimeout(() => exit(), 500);
    }
  }, [path]);

  return error ? (
    <Text color="red">{error}</Text>
  ) : (
    <Box>
      <Box marginLeft={1}>
        <Text>Введіть шлях до файлу з даними: </Text>
      </Box>
      <TextInput onSubmit={(value) => setPath(value)} />
    </Box>
  );
};
