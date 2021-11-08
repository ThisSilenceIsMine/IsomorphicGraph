import React, { useState } from 'react';
import { Text } from 'ink';

import { Select } from './components';
import { KeyboardInput, FileInput, Eval } from './components/MenuOptions';

const menuOptions = [
  'Введення з клавіатури',
  'Зчитати з файлу',
  'Розрахунок',
  'Вихід',
];

const App = () => {
  const [selected, setSelected] = useState<number | null>(null);

  if (!selected) {
    return (
      <Select
        menuOptions={menuOptions}
        onSubmit={(index) => setSelected(index)}
      />
    );
  }

  return renderSwitch(selected);
};

const renderSwitch = (key: number) => {
  switch (key) {
    case 0:
      return <KeyboardInput />;
    case 1:
      return <FileInput />;
    case 2:
      return <Eval />;
    case 3:
      return <Text>Adios!</Text>;

    default:
      return <Text color="red">ERROR OCCURED!</Text>;
  }
};

export default App;
