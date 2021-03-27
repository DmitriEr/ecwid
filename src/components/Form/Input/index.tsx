import React from 'react';

import './style.scss';

interface PropsInterface {
  type: string;
  description: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  onEnter?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<PropsInterface> = ({ 
  type,
  description,
  onChange,
  value,
  onEnter,
  children,
}) => {
  return (
    <form className="form">
      <input
        type={type}
        value={value}
        className="form__input"
        placeholder={description}
        onChange={onChange}
        onKeyDown={onEnter}
        id={type}
      />
      {children}
    </form>
  )
}