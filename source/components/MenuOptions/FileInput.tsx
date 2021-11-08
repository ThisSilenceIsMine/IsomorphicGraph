import React, { useEffect, useState } from 'react';
import { Box, Text } from 'ink';
import { UncontrolledTextInput as TextInput } from 'ink-text-input';

import fs from 'fs';
// import { resolve } from 'path';

// import { Prompt } from '..';

export const FileInput = () => {
  const [path, setPath] = useState<string | null>(null);

  useEffect(() => {
    if (!path) return;

    const raw = fs.readFileSync(path, 'utf-8');
    const { matrix1 } = JSON.parse(raw);

    console.table(matrix1);
  }, [path]);

  return (
    <Box>
      <Box marginRight={1}>
        <Text>Введіть шлях до файлу з даними: </Text>
      </Box>
      <TextInput onSubmit={(value) => setPath(value)} />
    </Box>
  );
};
