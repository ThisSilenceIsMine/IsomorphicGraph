import React, { useState } from 'react';
import { useInput, Text } from 'ink';

export interface PromptProps {
  onSubmit: (input: string) => void;
  prompt?: string;
}

export const Prompt = ({ onSubmit, prompt }: PromptProps) => {
  const [userInput, setUserInput] = useState('');

  useInput((input, key) => {
    if (key.return) {
      return onSubmit(userInput);
    }
    if (key.backspace) {
      return setUserInput((current) => current.slice(0, -1));
    }
    setUserInput((current) => current + input);
  });

  return (
    <>
      <Text>{prompt ?? 'Будьласка, введіть вхідні дані:'}</Text>
      <Text>{userInput}</Text>
    </>
  );
};
