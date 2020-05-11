import React, { FC, useEffect } from 'react';
import useName from './logic/useLogic';
// import { Container } from './styled';

export interface NameProps {}

const Name: FC<NameProps> = () => {
  const { isEditable, name, setName, turnOn, turnOff } = useName();
  useEffect(() => {
    if (localStorage.length > 0 && localStorage.getItem('greetingName')) {
      const userName = localStorage.getItem('greetingName');
      setName(userName as string);
    }
  }, []);

  return (
    <div>
      <button onClick={turnOn}>Edit</button>
      {!isEditable ? (
        <span>{name}</span>
      ) : (
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && turnOff(name)}
          onBlur={() => turnOff(name)}
          autoFocus
        />
      )}
    </div>
  );
};

export default Name;
