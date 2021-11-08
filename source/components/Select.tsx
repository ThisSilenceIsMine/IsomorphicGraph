import React, { useState } from 'react';
import { useInput, Text, Box } from 'ink';
import Spinner from 'ink-spinner';

interface SelectProps {
  menuOptions: string[];
  onSubmit?: (index: number) => void;
}

export const Select = ({ menuOptions, onSubmit }: SelectProps) => {
  const [cursor, setCursor] = useState(0);

  useInput((_, key) => {
    if (key.upArrow) {
      setCursor((cur) => (cur - 1 >= 0 ? cur - 1 : menuOptions.length - 1));
    }
    if (key.downArrow) {
      setCursor((cur) => (cur + 1 < menuOptions.length ? cur + 1 : 0));
    }
    if (key.return && onSubmit) {
      return onSubmit(cursor);
    }
  });

  const content = menuOptions.map((value, index) => {
    const isSelected = cursor == index;
    return (
      <Box key={index}>
        {isSelected && (
          <Text color="green">
            <Spinner type="dots" />
          </Text>
        )}
        <Box marginLeft={2}>
          <Text color={isSelected ? 'green' : undefined}>{value}</Text>
        </Box>
      </Box>
    );
  });

  return <>{content}</>;
};
