import React, { useState } from 'react';
//@ts-ignore
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

  switch (selected) {
    case 0:
      return <KeyboardInput />;
    case 1:
      return <FileInput />;
    case 2:
      return <Eval />;
    case 3:
      return <Text>Adios!</Text>;

    default:
      return (
        <Select
          menuOptions={menuOptions}
          onSubmit={(index) => setSelected(index)}
        />
      );
  }
};

module.exports = App;
export default App;
