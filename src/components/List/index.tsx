import React from 'react';

import { ListType } from '../../intefaces';
import './style.scss';

interface PropsInterface {
  list: ListType;
  setList: (list: (prev: ListType) => ListType) => void;
}

export const List: React.FC<PropsInterface> = ({ list, setList }) => {
  const onClick = (num: number) => setList((prev) => [...prev.filter((_, ind) => ind !== num)]);

  return (
    <ul className="list">
      {list.map((source, i) => {
        return (
          <li key={i} className="item" onClick={() => onClick(i)}>
            <img src={source} alt={`picture_${i}`} className="image" />
          </li>
        )
      })}
    </ul>
  );
}