import React, { Fragment, useState } from 'react';

import { List } from './List';
import { Form } from './Form';
import { ListType } from '../intefaces';

import './style.scss';

const App: React.FC = () => {
  const [list, setList] = useState<ListType>([]);

  return (
    <>
      <header className="header">
        <Form setList={setList} />
      </header>
      <main className="main">
        <List list={list} setList={setList} />
      </main>
    </>
  );
}

export default App;
