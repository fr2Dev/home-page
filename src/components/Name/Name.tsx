import React, { FC, useEffect, Fragment } from 'react';
import useName from './logic/useLogic';
import Edit from './Edit';
import { ButtonStyled, Container, InputStyled } from './styled';

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
    <Container>
      {!isEditable ? (
        <Fragment>
          <span>{name}</span>
          <ButtonStyled onClick={turnOn}>
            <Edit />
          </ButtonStyled>
        </Fragment>
      ) : (
        <InputStyled
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && turnOff(name)}
          onBlur={() => turnOff(name)}
          autoFocus
        />
      )}
    </Container>
  );
};

export default Name;
