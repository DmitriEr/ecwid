import React from 'react';

import { ListType } from '../../intefaces';
import './style.scss';
interface PropsInterface {
  list: ListType;
  setList: (list: (prev: ListType) => ListType) => void;
}

export const List: React.FC<PropsInterface> = ({ list, setList }) => {
  const onClick = (num: number) => setList((prev) => [...prev.filter((_, ind) => ind !== num)]);

  const dragHandler = (e: React.DragEvent) => {
    e.preventDefault();
  }

  const dropHandler = (e: React.DragEvent) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files === null || files.length === 0) return;

    const file: File = files[0];
    const reader = new FileReader();

    reader.onloadend = function () {
      const img: string | ArrayBuffer | null = reader.result;
      if (typeof img === 'string') {
        setList((prev) => [...prev, img]);
      }
    }

    reader.readAsDataURL(file);
  }

  return (
    <ul
      className="list"
      onDragLeave={dragHandler}
      onDragEnter={dragHandler}
      onDragOver={dragHandler}
      onDrop={dropHandler}
    >
      {list.length 
        ? list.map((source, i) => {
          return (
            <li key={i} className="list__item" onClick={() => onClick(i)}>
              <img src={source} alt={`picture_${i}`} className="list__image" />
            </li>
          )
        }) 
        : <p>Вставьте фотографию</p>
      }
    </ul>
  );
}