import { useState } from 'react';

const defaultName = 'You';

const useName = () => {
  const [isEditable, setIsEditable] = useState(false);
  const [name, setName] = useState(defaultName);
  const turnOn = () => setIsEditable(true);
  const turnOff = (name: string) => {
    setIsEditable(false);
    if (name === '') setName(defaultName);
    localStorage.setItem('greetingName', name);
  };

  return { isEditable, turnOn, turnOff, name, setName };
};

export default useName;
