import React, { useEffect, useState } from 'react';
import fs from 'fs';
// import { resolve } from 'path';

import { Prompt } from '..';

export const FileInput = () => {
  const [path, setPath] = useState<string | null>(null);

  useEffect(() => {
    if (!path) return;

    const raw = fs.readFileSync(path, 'utf-8');
    const { matrix1 } = JSON.parse(raw);

    console.table(matrix1);
  }, [path]);

  return (
    <Prompt
      onSubmit={(input) => setPath(input || '.')}
      prompt="Введіть шлях до файлу з даними"
    />
  );
};
