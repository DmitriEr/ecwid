import React, { useState } from 'react';

import { List } from './List';
import { Form } from './Form';
import { ListType } from '../intefaces';

function App() {
  const [list, setList] = useState<ListType>([]);

  return (
    <>
      <Form setList={setList} />
      <List list={list} setList={setList} />
    </>
  );
}

export default App;
