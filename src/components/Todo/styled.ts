import styled from 'styled-components';

export const TaskList = styled.ul`
  padding: 8px;
`;

interface TaskProps {
  isDragging: boolean;
}

export const Task = styled.li<TaskProps>`
  background-color: ${({ isDragging }) => (isDragging ? '#0f0' : '#eee')};
  border-radius: 20px;
  border: 1px solid #333;
  padding: 4px;
`;
