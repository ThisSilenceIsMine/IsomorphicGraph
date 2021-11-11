import React, { useEffect, useState } from 'react';
import { Text } from 'ink';
// import { UncontrolledTextInput as TextInput } from 'ink-text-input';

import { Select } from './components';
//@ts-ignore
import { KeyboardInput, FileInput, Eval } from './components/MenuOptions';
import { inputData } from 'lib/types';

const menuOptions = [
  'Введення з клавіатури',
  'Зчитати з файлу',
  'Розрахунок',
  'Вихід',
];

const App = () => {
  const [selected, setSelected] = useState<number | null>(null);

  const [data, setData] = useState<inputData>();

  useEffect(() => {
    setSelected(null);
  }, [data]);

  if (selected === null) {
    return (
      <Select
        menuOptions={menuOptions}
        onSubmit={(index) => setSelected(index)}
      />
    );
  }

  switch (selected) {
    case 0:
      return <KeyboardInput onSubmit={(V, G) => setData({ V, G })} />;
    case 1:
      return <FileInput onSubmit={(V, G) => setData({ V, G })} />;
    case 2:
      return <Eval data={data} />;
    case 3:
      return <Text>Adios!</Text>;

    default:
      return <Text color="red">ERROR OCCURED!</Text>;
  }
};

export default App;
