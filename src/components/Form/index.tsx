import React, { useState } from 'react';

import { ListType } from '../../intefaces';
import { Input } from './Input';
import './style.scss';

interface PropsInterface {
  setList: (list: (prev: ListType) => ListType) => void;
}

interface FileInterface {
  [x: string]: { url: string }[],
}

export const Form: React.FC<PropsInterface> = ({ setList }) => {
  const [value, setValue] = useState('');

  const addLink = () => {
    if (value.length) {
      setList((prev: ListType) => [...prev, value]);
      setValue('');
    }
  }

  const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') addLink();
  }

  const onClick =(e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addLink();
  }

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

  const onChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files === null || files.length === 0) return;
    
    const file = files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
      const result = reader.result;

      if (typeof result === 'string') {
        const obj: FileInterface = JSON.parse(result);
        const values = Object.values(obj)[0];
        values.forEach(({ url }) => setList((prev) => [...prev, url]))
      }
    };
  }

  return (
    <div className="wrapper">
      <Input 
        type="text"
        description="Введите текст"
        value={value}
        onChange={onChangeInput}
        onEnter={onEnter}
      >
        <button onClick={onClick} className="button">Добавить картинку</button>
      </Input>
      <Input
        type="file"
        description="Вставьте файл"
        onChange={onChangeFile}
      />
    </div>
  );
}